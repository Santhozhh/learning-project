import next from 'next';
import { revalidatePath } from 'next/cache';
import React from 'react'

interface User {
  id : number;
  name  : string;
}
const Userspage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {next :{revalidate : 1 }})
  const users : User[] =  await res.json();
  return (
    
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(abc=><li key={abc.id}>{abc.name}</li>)}
      </ul>
    </div>
  )
}

export default Userspage