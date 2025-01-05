import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const{title} = bookmark;
    return (
        <div className="bg-white my-3 p-4 rounded-lg">
           <h1 className="text-lg font-semibold">{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;