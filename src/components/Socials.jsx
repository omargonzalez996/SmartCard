import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';


export default function Socials({ data }) {
    return (
        <div className='mt-5 flex justify-center align-middle items-center p-5 space-x-5'>
            {data.linkedin != null ?
                <ul>
                    <a href={data.linkedin}>
                        <LinkedInIcon fontSize='large' />
                    </a>
                </ul> : null}
            {data.facebook != null ?
                <ul>
                    <a href={data.facebook}>
                        <FacebookIcon fontSize='large' />
                    </a>
                </ul> : null}
            {data.twitter != null ?
                <ul>
                    <a href={data.twitter}>
                        <XIcon fontSize='large' />
                    </a>
                </ul> : null}
            {data.instagram != null ?
                <ul>
                    <a href={data.instagram}>
                        <InstagramIcon fontSize='large' />
                    </a>
                </ul> : null}

            {data.snapchat != null ?
                <ul>
                    <a href={data.snapchat}>Snapchat</a>
                </ul> : null}

            {data.tiktok != null ?
                <ul>
                    <a href={data.tiktok}>Tiktok</a>
                </ul> : null}

            {data.ebay != null ?
                <ul>
                    <a href={data.ebay}>Ebay</a>
                </ul> : null}

            {data.youtube != null ?
                <ul>
                    <a href={data.youtube}>
                        <YouTubeIcon fontSize='large' />
                    </a>
                </ul> : null}
        </div>
    )
}