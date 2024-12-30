export default function Links({ data }) {
    return (
        <div className='mx-5'>
            <ul>
                {data.buttons.map((buttondata) => (
                    <a href={buttondata.url}>
                        <li className='felx justify-center bg-slate-900 text-white w-full rounded-lg p-4 mt-3'>
                            <p className='text-center'>{buttondata.title}</p>
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    )
}