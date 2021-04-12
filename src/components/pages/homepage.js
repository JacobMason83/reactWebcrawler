import React, { Fragment, useState, useEffect } from 'react';
import Form from '../formcomponents/form'
import HomesList from '../formcomponents/list';


export default function Home({value}) {
    const  [searchValue, setSearchValue] = useState('')
    useEffect(() => {
        setSearchValue(value)
    }, [])
   return(
    <Fragment>
    <section className="search-box">
      <Form searchValue={searchValue} />

    </section>
    <section className='list-box'>
      <HomesList searchValue={searchValue} />
    </section>
    </Fragment>
   )
}