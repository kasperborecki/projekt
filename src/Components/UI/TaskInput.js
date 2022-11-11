import React from "react";


const TaskInput = (props) => {
    return(
        <input className="xs:mp-6 sm:ml-11  md:mr-1 w-100 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="tresc" type="text" placeholder="Treść"></input>
    );
};

export default TaskInput;