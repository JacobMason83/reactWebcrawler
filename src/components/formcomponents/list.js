import React, { useState, Fragment, useEffect} from 'react';
import ListMap from './listMap'
import 'firebase/database'
import { db } from '../../actions/firebaseconfig'



export default function HomesList() {
   const [data, setData] = useState([])


  
   useEffect(() => {
     const homeData = db.ref('props/pageProps/searchResults/home_search/results')
     homeData.on('value', snapshot => {
       const newData = snapshot.val()
       setData(newData)
       
     })
   }, [])
   return(
  <Fragment>
 
  
   <table width="100%" className="table-homes" cellPadding={0} cellSpacing={0} >
  <tbody>
   
    <tr>
     <th>Image</th>
    <th>Type</th> 
    <th>Bedrooms</th>
    <th>Bathrooms</th>
    <th>Sqare  Footage</th>
    <th>Year Built</th>
    <th>Delete</th>
  </tr>
      <ListMap data={data} />
      

  

      </tbody>
   </table>
 
 
     
  </Fragment>
   )
}