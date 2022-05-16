import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const Search  = () => {
  const [search, setSearch] = useState(false)
  const handleSearch = () => setSearch(!search)

  return (
    <form className='form-search'>
     <div className='search-iconn' onClick={handleSearch}>
       {!search ? (<AiOutlineSearch className="icon-search" style={{ color: "#ffff" }} />) : (<AiOutlineClose style={{ color: "#ffff" }} className="icon-close" />)}
     </div>
     <div className={search ? "search search-active" : "search"}>
       <div className="">
         <input className="bg-transparent" type="text" placeholder="Search films" onChange="" />
       </div>
      </div>
    </form>
  )

}
// useEffect(() => {
//   getData();
// },[]);
// const getData = async () => {
//   const [searchList, setSearchList] = useState([]);
//   const [searchInputText, setSearchInputText] = useState("");

//   const response = await fetch(
//     `https://api.themoviedb.org/3/search/movie?api_key=298722d66314704d61c48e8fe9330363&language=en-US&${searchInputText}=spiderman&include_adult=false`
//   );
// }

export default Search;
