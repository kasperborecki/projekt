import { useState } from "react"

import supabase from "../supabaseClient"

const Card = () => {

  const [title, setTitle] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title) {
      setFormError('Proszę o poprawne wypełnienie.')
      return
    }

    const { data, error } = await supabase
        .from('taski')
        .insert([{ title }])

    if (error) {
        console.log(error)
        setFormError('Proszę o poprawne wypełnienie.')
    }
    if (data){
        console.log(data)
        setFormError(null)
    } 

    window.location.reload()
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <input 
        className="xs:w-8/12 xs:ml-15 xs sm:ml-11 md:ml-6  md:mr-1 w-100 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text" 
          placeholder="Treść" 
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
       
        />
        <button
        className=" xs:ml-2 xs:w-6/12 mb-5 sm:ml-20 md:ml-11 sm:w-40 xs:w-40 rounded-lg px-6 py-3 mt-4 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
        >
            Dodaj
        </button>
        </div>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}


export default Card;