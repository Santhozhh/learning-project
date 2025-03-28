import next from 'next';
import { revalidatePath } from 'next/cache';
import React from 'react'

interface User {
  id : number;
  name  : string;
  email : string;
  phone : string;
}
const Userspage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {next :{revalidate : 1 }})
  const users : User[] =  await res.json();
  return (
    
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>name </th>
            <th>Email</th>
            <th> Address</th>
          </tr>
        </thead> 
        <tbody>
        {users.map(abc=><tr  key={abc.id}>
          <td>{abc.name}</td>
          <td>{abc.email}</td>
          <td> {abc.phone}</td>
        </tr >)}
        </tbody>
      </table>
    </div>
  )
}

export default Userspage