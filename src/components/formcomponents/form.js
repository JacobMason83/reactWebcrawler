import React, { useEffect, useState } from 'react';



export default function Form(props) {
   const [value, setValue] = useState('')
   const [home, homes] = useState([])

   return(
    <form className='form-container'>
        <input 
        type="text"
        placeholder='Search.....' 
        value={value}
        onChange={(e) => setUrl(e.target.value)}   
        />
        <div className="search"></div>
        <button className='search-btn'>Save Home</button>
    </form>
   )
}