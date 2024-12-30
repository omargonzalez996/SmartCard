import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';

export default function ActionButtons({ data, setOpenModal }) {

    const openModal = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }

    return (
        <div className='flex m-5 text-white justify-center items-center space-x-5'>
            <button onClick={(e) => openModal(e)} className='flex bg-blue-700 p-3 rounded-xl w-1/2 text-sm justify-center shadow-lg max-w-[250px]'>
                <CalendarMonthIcon fontSize='small' />
                <p className='mx-1'>Book Appointment</p>
            </button>
            <div className='cursor-pointer flex bg-slate-900 p-3 rounded-xl w-1/2 text-sm justify-center shadow-lg max-w-[250px]'>
                <EmailIcon fontSize='small' />
                <p className='mx-1'>Send an Email</p>
            </div>
        </div>
    )
}