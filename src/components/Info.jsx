import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Info({ data }) {
    return (
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
    )
}