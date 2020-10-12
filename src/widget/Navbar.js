import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import useStore from '../zustand/zustand'
const Navbar = () => {
    const langCode=useStore(s=>s.language);
    return (
        <div>
            <Link to={"/en"}>
                English
            </Link>
            <Link to={"/vi"}>
                Vietnamese
            </Link>
            <Link to={`/${langCode}/page`}>
                Normal Page
            </Link>
        </div>
    );
}

export default Navbar;
