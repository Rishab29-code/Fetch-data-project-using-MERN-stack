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
    <h3>. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes is shown below</h3>
    <table style={{width:500}}>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>gender</th>
        <th>income</th>
        <th>city</th>
        <th>car</th>
        <th>quote</th>
        <th>phoneprice</th>
      </tr>
      {
      data.map(i=>{
        return(
          <tr key={i}>
            <td >{i.id}</td>
            <td>{i.first_name}</td>
            <td>{i.last_name}</td>
            <td>{i.email}</td>
            <td>{i.gender}</td>
            <td>{i.income}</td>
            <td>{i.city}</td>
            <td>{i.car}</td>
            <td>{i.quote}</td>
            <td>{i.phone_price}</td>
             </tr>
        )
      })}
    </table>
    </>
      
  );
}

export default First;
