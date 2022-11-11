import React from "react";

import { Link } from "react-router-dom";


const Navbar = () => {
 return (
    <div className="bg-green-700 w-full h-15 mb-12">
    <h1 className="font-bold text-xl mb-1">To-Do-List</h1>
    <Link className="mr-12 text-lg font-medium" to="/">Taski</Link>
    <Link className="text-lg font-medium"to="/Logowanie">Logowanie</Link>
    </div>
 );
}
export default Navbar;