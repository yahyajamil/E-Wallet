import React from 'react';
import Navbar from './Navbar';
import NewCard from './NewCard';
import AddCard from './AddCard';


export default function EWallet() {
  return (
    <div className='wallet'>
      <Navbar />
      <NewCard />
      <AddCard />
    </div>
  )
}
