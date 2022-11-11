import React from 'react';
import { useEffect, useState } from 'react'
import supabase from '../supabaseClient';
import { useHistory } from 'react-router-dom';


const Rejestracja = () => {

  const history = useHistory()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [formError, setFormError] = useState(null)

  const handleZarejestruj  = async (email, password, history) => {
    console.log(email, password)
    try{
      let { error } = await supabase.auth.signUp({email, password})
      if(error) throw error
      alert('logged in')
      history.push("/")
    } catch(error){
      alert(error.message)
    }

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setFormError('Proszę o poprawne wypełnienie.')
      return
    }

    const { data, error } = await supabase
        .from('user')
        .insert([{ email, password }])

    if (error) {
        console.log(error)
        setFormError('Proszę o poprawne wypełnienie.')
    }
    if (data){
        console.log(data)
        setFormError(null)
    } 
};

  return (
    <div className="max-w-md pt-12 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" >
        <form onSubmit={handleSubmit}>
      <input
        className="xs:w-8/12 xs:ml-15 xs sm:ml-11 md:ml-6  md:mr-1 w-100 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}

      />
      <input
        className="xs:w-8/12 xs:ml-15 xs sm:ml-11 md:ml-6  md:mr-1 w-100 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}

      />
      <button
        className=" xs:ml-2 xs:w-6/12 mb-5 sm:ml-20 md:ml-11 sm:w-40 xs:w-40 rounded-lg px-6 py-3 mt-4 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
        onClick={() =>handleZarejestruj(email, password, history)}
      >
        Zarejestruj 
      </button>
      {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

export default Rejestracja;