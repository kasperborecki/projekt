import React from 'react';
import { useEffect, useState } from 'react'
import supabase from '../supabaseClient';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";


const Logowanie = () => {

  const history = useHistory()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


  const handleZaloguj = async (email, password,history) => {
    console.log(email, password)
    try{
      let { error } = await supabase.auth.signInWithPassword({email,  password})
      if(error) throw error
      alert('logged in')
      history.push("/")
    } catch(error){
      console.log(error.message)
    }
  };

  return (
    <div className="max-w-md pt-12 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" >
      <input
        className="xs:w-8/12 xs:ml-15  sm:ml-11 md:ml-6  md:mr-1 w-100 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}

      />
      <input
        className="xs:w-8/12 xs:ml-15 sm:ml-11 md:ml-6  md:mr-1 w-100 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}

      />
      <button
        className=" xs:ml-2 xs:w-7/12 mb-5 sm:ml-20 md:ml-11 sm:w-40 xs:w-40 rounded-lg px-6 py-3 mt-4 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
        onClick={() => handleZaloguj(email, password, history)}
      >
        Zaloguj
      </button>

      <button
        className=" xs:ml-2 xs:w-7/12 mb-5 sm:ml-20 md:ml-11 sm:w-40 xs:w-40 rounded-lg px-6 py-3 mt-4 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
        >
       <Link className="text-lg font-medium"to="/Rejestracja">Zarejestruj się</Link>
      </button>
    </div>
  );
}

export default Logowanie;