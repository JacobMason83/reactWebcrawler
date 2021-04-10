import React, { Fragment, useState, useEffect } from 'react'
import firebase from '../../actions/firebaseconfig'
import {db} from '../../actions/firebaseconfig'


export default function ListMap (props) {
  const [list, setList] = useState([])


  useEffect(() => {
    
    setList(props.data)
  })
  return (
    <Fragment>
     {list.map(item => {
       return (
     <tr key={item.property_id}>
      <td><img src={item.primary_photo.href}  alt="photo"/></td>
      <td>{item.description.type}</td>
      <td>{item.description.beds}</td>
      <td>{item.description.baths}</td>
      <td>{item.description.sqft}</td>
      <td>{item.description.year_built}</td>
      <td className='delete-btn' >Delete</td>
      </tr>

       )
     })}
    </Fragment>
  )
}
