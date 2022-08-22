import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import './Feature.scss'
const Feature = ({ type }) => {
    return (
        <div className='Feature'>
            {
                type && (
                    <div className="category">
                        <span>{type === 'movie' ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option>Genre</option>
                            <option>Thriller</option>
                            <option>Mystry</option>
                            <option>Action</option>
                        </select>
                    </div>
                )
            }
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHCw8IBwgNDQkFDQ8FBQ0NDQ8NDRAKFBEWFhQRExUYHCggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ8PDisZExktLSsrKysrKysrKysrLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJwBQwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQQH/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/EABoBAQEBAQEBAQAAAAAAAAAAAAIAAwEHBgT/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A58A/S+nqgIKKius6KioKAIKoCCioqZ0VFdCgCCioqCioqZ0AdCqAmdFRUFAEFUB0KKioKKipnQBBRUV0KAIGEBk9BqgIKKius6KioKAIKoCCioqZ0VFdCgCCioqCioqZ0AdCqAmdFRUFAEFUB0KKioKKipnQBBRUV0KAIGEBk9BqgIKKius6KioKAIKoCCioqZ0VFdCgCCioqCioqZ0AdCqAmdFRUFAEFUB0KKioKKipnQBBRUV0KAIGEBk9BqgIKKius6KioKAIKoCCioqZ0VFdCgCCioqCioqZ0AdCqAmdFRUFAEFUB0KKioKKipnQBBRUV0KAIGEBk9BqgIKKius6KioKAIKoCCioqZ0VFdCgCCioqCioqZ0AdCqAmdFRUFAEFUB0KKioKKipnQBBRUV0KAIGEBk9BqgIKKius6KioKAIKoCCioqZ0VFdCgCCioqCioqZ0AdCqAmdFRUFAEFUB0KKioKKipnQBBRUV0KAIGEBk9BqgIKKius6KioKAIKoCCioqZ0VFdCgCCioqCioqZ0AdCqAmdFRUFAEFUB0KKioKKipnQBBRUV0KAIGEBk9BqgIKKius6KioKAIKoCCioqZ0VFdCgCCioqCioqZ0AdCqAmdFRUFAEFUB0KKioKKipnQBBRUV0KAIGEBk9BqgIKKius6KioKAIKoCCioqZ0VFdCgCCioqCioqZ0AdCqAmdFRUFAEFUB0KKioKKipnQBBRUV0KAIGEBk9BqgIKKius6KioKAIKoCCioqZ0VFdCgCCioqCioqZ0AdCqAmdFRUFAEFUB0KKioKKipnQBBRUV0KAIH//2Q==" alt="img" />
            <div className="info">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87f1d34d-2002-4608-b166-a5c6fac0f344/deykla1-e7dd9b92-f548-4f01-8df5-a304b2870ba3.png/v1/fill/w_1024,h_576,strp/yin_mobile_legends_png_transparant_by_dechunf_deykla1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvODdmMWQzNGQtMjAwMi00NjA4LWIxNjYtYTVjNmZhYzBmMzQ0XC9kZXlrbGExLWU3ZGQ5YjkyLWY1NDgtNGYwMS04ZGY1LWEzMDRiMjg3MGJhMy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.jPjhLATXUMC1nMUo2690BDK_ZMWPDPwtxs9ngOcQL34" alt="img" />
                <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum accusamus id animi voluptates
                    quas commodi quod facilis, ducimus, eaque dolor autem nulla fugit optio natus sunt a corrupti aperiam nam.</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feature;