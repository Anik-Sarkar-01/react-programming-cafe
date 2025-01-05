import { FaRegBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';




const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const {id, cover, author_img, author, posted_date, reading_time, title, hashtags} = blog;
    
    return (
        <div className="space-y-5">

            <img className="w-full rounded-xl" src={cover} alt={`cover photo of the bolg - ${title}`} />

            <div className="flex justify-between items-center mt-6">
                <div className="flex gap-3 items-center">
                    <div>
                        <img className="w-14" src={author_img} alt="" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{author}</h2>
                        <span className="text-gray-600">{posted_date}</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <p className="text-gray-600">{reading_time} mins read</p>
                    <button onClick={() => handleAddToBookmarks(blog)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>

            <h1 className="text-4xl font-bold">{title}</h1>


            <div className="flex gap-2">
                {
                    hashtags.map((hashtag, idx) => <p key={idx} className="text-gray-600">#{hashtag}</p>)
                }
            </div>

            <button onClick={() => handleMarkAsRead(reading_time, id)} className="text-purple-700 underline font-bold">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;