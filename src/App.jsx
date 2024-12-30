import { useState, useEffect } from 'react'
import OptionsMenu from './components/OptionsMenu';
import { getData } from './api/data';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

//offline data
import offlinedata from '../data/offlinedata.json'
const photo_cover = '/cover.png';

function App() {
  const [data, setData] = useState(offlinedata)
  const [user, setUser] = useState(1)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const user_data = offlinedata //await getData(user)
      setData(user_data)
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <p className="text-lg font-medium text-gray-600">Loading...</p>
        </div>
      ) : (
        <div className='flex-col bg-gradient-to-r from-slate-200 to-slate-300 h-screen '>
          {/* COVER */}
          <div className="bg-[url('https://dash.zarbyte.com/storage/cardcovers/FdQgroOpkVEvoBUmgMjdBmN407OiSXsMDZeIRcDn.png')] bg-cover bg-center min-h-40">
            <div className='absolute top-2 right-2'>
              <OptionsMenu />
            </div>
          </div>
          <div className='relative bottom-16'>
            {/* INFO */}
            <div>
              <div className="flex flex-col items-center justify-center h-full text-slate-700">
                <div className="rounded-full bg-white flex items-center justify-center border-solid">
                  <img
                    src="https://dash.zarbyte.com/storage/cardavatars/BvvVVbqUxCZue64HN3M759HVvArv7nH5KPRgqqlb.jpg"
                    alt="ProfilePic"
                    className="rounded-full w-32 h-32 border-4 border-slate-200"
                  />
                </div>
                <h1 className="mt-1 text-2xl font-semibold">
                  {data.name ? data.name : "Your Name"}
                </h1>
                <h4 className="mt-1 text-sm font-normal">
                  {`${data.title ? data.title : "Title"} | ${data.company ? data.company : "company"}`}
                </h4>
                <h4 className="flex mt-1 text-sm font-normal items-center">
                  <LocationOnIcon fontSize='extra-small' />
                  {data.address ? data.address : "Address"}
                </h4>
              </div>
            </div>
            {/* BODY */}
            <div className=''>
              <div className='flex m-5 text-white justify-center items-center space-x-2'>
                <button className='flex bg-blue-700 p-3 rounded-xl w-1/2 text-sm justify-center shadow-lg'>
                  <CalendarMonthIcon fontSize='small' />
                  <p className='mx-1'>Book Appointment</p>
                </button>
                <button className='flex bg-slate-900 p-3 rounded-xl w-1/2 text-sm justify-center shadow-lg'>
                  <EmailIcon fontSize='small' />
                  <p className='mx-1'>Send an Email</p>
                </button>
              </div>
            </div>
            <div>
              <p className='text-sm text-slate-700 text-center px-5 mt-2'>{data.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
