import { useState } from "react";
import { BiSearch,BiCaretDown,BiCheckboxChecked } from "react-icons/bi";

function DropDown({toggle,sortBy,onSortChange}){
  if(!toggle){
    return null;
  }
  return (
    <ul>
      <li
      onClick={() => onSortChange('petName')}
      >애기명<BiCheckboxChecked /></li>
      <li
      onClick={() => onSortChange('ownerName')}
      >예약자명<BiCheckboxChecked /></li>
      <li
      onClick={() => onSortChange('aptDate')}
      >날짜<BiCheckboxChecked /></li>
    </ul>
  )
}
export default function Search({query,sortBy,onQueryChange,onSortChange}){
  const [toggle,setToggle] = useState(false)
  return (
    <div id="search">
      <p>
      <BiSearch />
        <input 
        type="text"
        value={query}
        onChange={(e) => {onQueryChange(e.target.value)}}
         />
        <button type="button"
        onClick={() =>{setToggle(!toggle)}}
        ><BiCaretDown /></button>
      </p>
      <DropDown 
      toggle = {toggle}
      sortBy = {sortBy}
      onSortChange = {mySort => onSortChange(mySort)}
       />
    </div>
  );
}