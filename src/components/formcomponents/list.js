import React, { useState, Fragment, useEffect} from 'react';
import ListMap from './listMap'
import 'firebase/database'
import { db } from '../../actions/firebaseconfig'



export default function HomesList(props) {
   const [data, setData] = useState([])
  
   const searchValue = props.value || ''
   const filterData = (data) => {
     if(searchValue === undefined){
       return data
     }
     else if (searchValue !== null && searchValue === 'single family'){
       return data.filter(item => searchValue === item.searchValue)
     }else if (searchValue.includes('beds')) {
       if(searchValue.includes('5')){
         return data.filter(item => item.description.beds >= 5)
       } else if(searchValue.includes('4')) {
        return data.filter(item => item.description.beds === 4)
       } else if(searchValue.includes('3')){
         return data.filter(item => item.description.beds === 3)
       } else {
         return data.filter(item => item.description.beds <= 2)
       }
     } else {
       return data 
     }
   }

  
   useEffect(() => {
     const homeData = db.ref('props/pageProps/searchResults/home_search/results')
     homeData.on('value', snapshot => {
       const newData = snapshot.val()
       setData(newData)
       
     })
   }, [])
   return(
  <Fragment>
 
  
   <table width="100%" className="table-homes" cellPadding={0} cellSpacing='5' >
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
      <ListMap data={filterData(data)} />
      

  

      </tbody>
   </table>
 
 
     
  </Fragment>
   )
}