import React from 'react';
import {getWorkshops} from "../api.js";
import {Link, Outlet} from "react-router-dom";

function Workshops(props) {
    const workshops = getWorkshops();
    return (
        <div>
            <nav>
           <h3>Workshops</h3>
            {
                workshops.map(workshop =>
                    <Link key={workshop.id}>{workshop.name}</Link>
                )
            }
            </nav>
            <Outlet/>
        </div>
    );
}

export default Workshops;