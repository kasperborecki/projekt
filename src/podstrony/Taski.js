import React from 'react';

import Card from '../Components/Card';
import TaskList from '../Components/TaskList';


const Taski = () => {
    return (
        <div>
          <div className="max-w-md pt-12 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" >
            <Card></Card>
            <div className="bg-gray-300  w-10/12 md:ml-14 sm:ml-9 xs:ml-8 px-2 rounded-xl mb-4">
              <TaskList></TaskList>
            </div>
          </div>
        </div>
      );
}

export default Taski;