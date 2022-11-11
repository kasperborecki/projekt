import React, { useReducer } from 'react';

import TaskCard from './TaskCard'
import supabase from '../supabaseClient'
import { useEffect, useState } from 'react'

const TaskList = () => {
  const [fetchError, setFetchError] = useState(null);
  const [taski, setTaski] = useState(null);

  useEffect(() => {
    const fetchTaski = async () => {
      let { data: taski, error } = await supabase
        .from('taski')
        .select('title, id')
      
      if (error) {
        setFetchError('Nie znaleziono zadań')
        setTaski(null)
      }
      if (taski) {
        setTaski(taski)
        setFetchError(null)
      }
    }

    fetchTaski()
    console.log(taski)

  }, [])

  return (
    <div className="font-mono">
      {fetchError && (<p>{fetchError}</p>)}
      {taski && (
        <div>
          <div>
            {taski.map(task => (
             <TaskCard 
             key={task.id} task={task}
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