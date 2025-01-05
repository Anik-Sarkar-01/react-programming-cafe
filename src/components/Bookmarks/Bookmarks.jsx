import Bookmark from "../Bookmark/Bookmark";

import PropTypes from 'prop-types';


const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="w-1/3">
            <div className=" bg-gray-100 p-4 border-[3px] border-purple-700 rounded-lg">
                <h2 className="text-2xl text-center text-purple-700 font-semibold">Spent time on read : {readingTime} mins </h2>
            </div>

            <div className=" bg-gray-100 mt-5 p-4 rounded-lg">
                <h2 className="text-2xl text-center font-bold">Bookmarked Blogs : {bookmarks.length}</h2>

                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx}  bookmark={bookmark}></Bookmark>)
                }

            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};

export default Bookmarks;