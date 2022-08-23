import { ArrowBackOutlined } from '@mui/icons-material';
import './Watch.scss'

const Watch = ({ src }) => {
    return (
        <div className='Watch'>
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video
                src={src}
                className="video"
                autoPlay
                progress
                controls>
            </video>
        </div>
    );
};

export default Watch;