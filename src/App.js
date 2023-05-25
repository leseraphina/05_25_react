
import { useCallback, useEffect, useState } from 'react';
import AddAppointment from './components/AddAppointment';
import AddInfo from './components/AddInfo';
import Search from './components/Search';

import {BiArch}   from "react-icons/bi"
function App() {
  const [appointList,setAppointList] = useState([]);
  const [query,setQuery] = useState('');
  const [sortBy,setSortBy] = useState('petName');

const filterList = appointList.filter(
  item => {return (
    item.petName.toLowerCase().includes(query.toLowerCase()) ||
    item.ownerName.toLowerCase().includes(query.toLowerCase()) 
  )})
  .sort(
    (a,b) => {
      return (
        a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 : 1
      )
    })

  const fetchData = useCallback(
    () =>{
      fetch('./data.json')
      .then(response => response.json()
      .then(data => setAppointList(data)))
    },[]
  )
// 15 - 25 -> 입력하기
  useEffect(fetchData,[fetchData]);
  return (
    <article>
     <h3><BiArch />예약시스템</h3>
    <AddAppointment
      lastId={appointList.reduce((max,item) => Number(item.id) > max ? Number(item.id) : max ,0)}
      onSendAppoint = {
        myAppoint => setAppointList([...appointList,myAppoint])
      }/>
    <Search
     query={query}
     onQueryChange = {(myQuery) => setQuery(myQuery)}
     sortBy={sortBy}
     onSortChange ={(mySort) => setSortBy(mySort)}
     />
    <div id="list">
      <ul>
        {filterList.map((appoint) =>(
          <AddInfo 
            key={appoint.id}
            appoint={appoint}
            onDelete={
              myId => setAppointList(appointList.filter(item => item.id !== myId))
            } 
            />))}
      </ul>
    </div>
    </article>
  );
}

export default App;
