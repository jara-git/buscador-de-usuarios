import React, { useState, useEffect } from 'react';
import './Search.scss';
import { generate as id } from 'shortid'; // key generator for map



const Search= () => {

    // Declara una nueva variable de estado
    const [searchNow, setSearchNow] =  useState('');

    // nueva variable fetch data
    


    return (
        <div className="Search">
            <header>
                <h1 className='title'>Usuarios</h1>
            </header>
            <section className='searchbar'>
                <input className='bar' type="text" label='buscador' placeholder="Buscar por nombre, email o website"></input>
            </section>
            <section className='table'>
            <div className='item'>
                id
            </div>
            <div className='item'>
                Usuario
            </div>
            <div className='item'>
                Email
            </div>
            <div className='item'>
                Dirección
            </div>
            <div className='item'>
                Website
            </div>
            </section>
        </div>
    );
}

export default Search;