import React, { useEffect, useState } from 'react';
import axios from 'axios'


export default function Form(props) {
   const [url, setUrl] = useState('')
   const [home, homes] = useState([])
   const onSubmit = (e) => {
    // e.preventDefault();
    //    console.log('i submitted')
    //     axios
    //     .get()

   }
//    useEffect(() => {
      
//        setUrl('')
//    },[])
   return(
    <form className='form-container' onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder='Search.....' 
        value={url}
        onChange={(e) => setUrl(e.target.value)}   
        />
        <div className="search"></div>
        <button>Save Home</button>
    </form>
   )
}