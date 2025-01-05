import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  
  
  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time , id) => {
    setReadingTime(readingTime + time);

    const newBookmarks = bookmarks.filter(bookmark => bookmark.id != id );
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <div className='mx-auto max-w-7xl'>
        <Header></Header>
        <div className='flex justify-between gap-6'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
