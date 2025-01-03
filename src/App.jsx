import { useState, useEffect } from 'react'
import { getData } from './api/data';
//offline data
import offlinedata from '../data/offlinedata.json'

import Cover from './components/Cover';
import Info from './components/Info';
import ActionButtons from './components/ActionButtons';
import Socials from './components/Socials';
import Links from './components/Links';
import AppointmentForm from './components/AppointmentForm';

const photo_cover = '/cover.png';

function App() {
  const [data, setData] = useState(offlinedata)
  const [user, setUser] = useState(1)
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)


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
    <div>
      <div className="flex items-center justify-center min-h-screen bg-slate-200">
        {loading ? (
          <p className="text-lg font-medium text-gray-600">Loading...</p>

        ) : (
          <div className='flex-col bg-gradient-to-r from-slate-200 to-slate-300 h-auto max-w-[600px] shadow-xl'>
            <Cover />
            <div className='relative bottom-16'>
              <Info data={data} />
              <ActionButtons data={data} setOpenModal={setOpenModal} />
              <div className="border-t border-gray-300 my-4 mx-5" />
              {/* DESCRIPTION */}
              <div className='m-10'>
                <p className='text-sm text-slate-700 text-center px-5'>{data.description}</p>
              </div>
              <Socials data={data} />
              <div className="border-t border-gray-300 my-4 mx-5" />
              <Links data={data} />
            </div>
          </div>
        )}
      </div>
      <div className='flex justify-center items-center h-36 bg-slate-900 text-white w-full'>
        <div>
          <p className='flex justify-center font-medium'>Powered By</p>
          <img src="https://dash.zarbyte.com/images/zarbyte-logo.png" alt="zarbyte logo" />
        </div>
      </div>
      {openModal && <AppointmentForm openModal={setOpenModal} />}
    </div>
  )
}

export default App
