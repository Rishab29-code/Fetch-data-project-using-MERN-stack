import {useEffect, useState} from 'react';

import axios from 'axios';


function First() {
  const [data,setdata]=useState([]);
 useEffect(() => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
    axios.get('http://localhost:5000/first',config)
      .then(response => {
        setdata(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])
  
   return (
    <>
    <h3>Show the data of top 10 cities which have the highest number of users and their average income.</h3>
    <table style={{width:500}}>
      <tr>
        <th>ID</th>
        <th>total_users</th>
        <th>average_income</th>
        
      </tr>
      {
      data.map(i=>{
        return(
          <tr key={i}>
            <td >{i.id}</td>
            <td>{i.total_users}</td>
            <td>{i.average_income}</td>
            
             </tr>
        )
      })}
    </table>
    </>
      
  );
}

export default First;
