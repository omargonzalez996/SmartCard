import { useState, useEffect } from 'react'
import { getData } from './api/data';

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
        <div className='flex-col'>
          {/* COVER */}
          <div className="bg-[url('https://dash.zarbyte.com/storage/cardcovers/FdQgroOpkVEvoBUmgMjdBmN407OiSXsMDZeIRcDn.png')] bg-cover bg-center min-h-40" />
          {/* DATA */}
          <div className='relative bottom-16'>
            <div className="flex flex-col items-center justify-center h-full text-slate-700">
              <div className="rounded-full bg-white flex items-center justify-center border-solid">
                <img
                  src="https://dash.zarbyte.com/storage/cardavatars/BvvVVbqUxCZue64HN3M759HVvArv7nH5KPRgqqlb.jpg"
                  alt="ProfilePic"
                  className="rounded-full w-28 h-28 shadow-md border-4"
                />
              </div>
              <h1 className="mt-1 text-2xl font-semibold">{data.name}</h1>
              <h4 className="mt-1 text-md font-normal">{`${data.title} | ${data.company}`}</h4>
              <h4 className="mt-1 text-md font-normal">{data.address}</h4>
            </div>
          </div>
          {/* BODY */}
          <div>
            <div className=''>

            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
