import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import { useState } from "react";
import "./ListItem.scss"

const ListItem = ({ index }) => {
    const [isHoverd, setIsHoverd] = useState(false)
    const trailer = 'https://vod-progressive.akamaized.net/exp=1661177649~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F390%2F29%2F726954265%2F3370901662.mp4~hmac=85cfc6db95d097644a28b98db83ff70dc295cad6f5451a347af279a12c2fd0d3/vimeo-prod-skyfire-std-us/01/390/29/726954265/3370901662.mp4?filename=file.mp4'
    return (
        <div className='Item'
            onMouseEnter={() => setIsHoverd(true)}
            onMouseLeave={() => setIsHoverd(false)}
            style={{ left: isHoverd && index * 225 - 50 + index * 2.5 }}
        >
            <img src="https://i.pinimg.com/originals/3c/61/f0/3c61f09870b113d4dff20ddbc1e2cac9.jpg" alt="img" />
            {
                isHoverd && (
                    <>
                        <video src={trailer} autoPlay loop />
                        <div className="itemInfos">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownAltOutlined className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>1 hour 12 mins</span>
                                <span className="age-limit">+17</span>
                                <span>1999</span>
                            </div>
                            <div className="desc">Lorem ips soluta. Id quibusdam voluptas iusto in, odit deleniti similique vel.</div>
                            <div className="genre">Comedy</div>
                        </div>
                    </>
                )}

        </div>
    );
};

export default ListItem;