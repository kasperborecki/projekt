import React from "react";

import { CgTrash } from "react-icons/cg";
import { AiFillEdit } from "react-icons/ai";
import supabase from "../supabaseClient";

const TaskCard = ({ task, onDelete }) => {

    const handleDelete = async () => {

        const { data, error} = await supabase
            .from('taski')
            .delete()
            .eq('id', task.id)
    
    if (error){
        console.log(error)
    }
    if (data){
        console.log(data)
        onDelete(task.id)
    }
}

    return (
        <div className="w-12/12">
                <h3 className="w-">{task.title}</h3>
                <i onClick={handleDelete}><CgTrash/></i>
                <i><AiFillEdit/></i>
        </div>
    )
};

export default TaskCard;