import React, { Fragment, useState } from 'react';
import Form from '../formcomponents/form'
import HomesList from '../formcomponents/list';


export default function Home(props) {
    
   return(
    <Fragment>
    <section className="search-box">
      <Form />

    </section>
    <section className='list-box'>
      <HomesList />
    </section>
    </Fragment>
   )
}