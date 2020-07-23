import React, { useState, useEffect } from 'react';
import './Search.scss';
// import { generate as id } from 'shortid'; // key generator for map



const Search = () => {

    // Declare a new state variable
    const [banana, setBanana] =  useState([]);
    const [hasError, setHasError] = useState(false);
    const [userInput, setUserInput] = useState('');

    // fetch data
    useEffect(() =>{
    const getData = async () => {
        await  fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => setBanana(res))
        .catch(() => setHasError(true))
    }
    getData()}
  , []);
  
  // handle change typing search bar
  const handleTypeChange = (e) => {
    setUserInput(e.target.value)
  }

    return (
        <div className="Search">
            <header>
                <h1 className='title'>Usuarios</h1>
            </header>
            <section className='searchbar'>
                <input onChange={e => handleTypeChange(e)} className='bar' type="text" label='searcher' placeholder="Buscar por nombre, email o website"></input>
            </section>
            <tr className='table'>
                <th className='item'>
                    id
                </th>
                <th className='item'>
                    User
                </th>
                <th className='item'>
                    Email
                </th>
                <th className='item'>
                    Address
                </th>
                <th className='item'>
                    Website
                </th>
            </tr>
            {
                banana.length > 0 && userInput !== '' ? (
                    banana.filter(el =>{
                        return el.name.toLowerCase().indexOf(userInput.toLowerCase()) !== -1 || el.email.toLowerCase().indexOf(userInput.toLowerCase()) !== -1 || el.website.toLowerCase().indexOf(userInput.toLowerCase()) !== -1 
                    }).map(row => (
                        <tr className='table' key={row.id}>
                            <th className='item'>
                                {row.id}
                            </th>
                            <th className='item'>
                                {row.name}
                            </th>
                            <th className='item'>
                                {row.email}
                            </th>
                            <th className='item'>
                                {row.address.street}
                            </th>
                            <th className='item'>
                                {row.website}
                            </th>
                        </tr>
                        
                    ))
                ):(
                    <p></p>
                )

            }
        </div>
    );
}

export default Search;