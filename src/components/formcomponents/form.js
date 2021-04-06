import React, { useEffect, useState } from 'react';


export default function Form(props) {
   const [url, setUrl] = useState('')
   useEffect(() => {
       setUrl('')
   },[])
   return(
    <form className='form-container'>
        <input 
        type="text"
        placeholder='Search.....' 
        value={url}
        onChange={(e) => setUrl(e.target.value)}   
        />
        <div className="search"></div>
    </form>
   )
}