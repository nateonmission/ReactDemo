
// Single Selection Accordian

// Multiple Selection Accordian

import { useState } from "react";
import data from "./data";

export default function Accordian(){
    const [selected, setSelected] = useState(null)

    return <div class="wrapper">
        <div class="accordian">
            {
                data && data.length > 0 ? 
                data.map(dataItem=> <div calssName="item">
                    <div className="title" onclick=""> <h3>{dataItem.question}</h3> </div>
                    <span>+</span>
                </div>)
                : <div>No Data Found!</div>

            }

        </div>

    </div>;

}