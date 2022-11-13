import React from 'react';

import TaskCard from './TaskCard'
import supabase from '../supabaseClient'
import { useEffect, useState } from 'react'

const TaskList = ({taski, setTaski, title}) => {
  const [fetchError, setFetchError] = useState(null);
 

 const handleDelete = (id) => {

  setTaski(prevTaski => {
    return prevTaski.filter(taski => taski.id !== id)
  })

 }

  useEffect(() => {
    const fetchTaski = async () => {
      let { data, error } = await supabase
        .from('taski')
        .select('title, id')
      
      if (error) {
        setFetchError('Nie znaleziono zadań')
        setTaski(null)
      }
      if (data) {
        setTaski(data)
        setFetchError(null)
      }
    }

    fetchTaski()

  }, [title, taski])

  return (
    <div className="font-mono">
      {fetchError && (<p>{fetchError}</p>)}
      {taski && (
        <div>
          <div>
            {taski.map(task => (
             <TaskCard 
             key={task.id} 
             task={task}
             onDelete={handleDelete}
             />
            ))}
          </div>
          <div>
          </div>
        </div>
      )}
    </div>
  )
}


export default TaskList;
