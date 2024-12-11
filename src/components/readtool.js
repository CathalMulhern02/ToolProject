import axios from "axios";
import { useState, useEffect } from "react";
import Tools from "./tools";

function ReadTool() {
    const [data, setData] = useState([]);

    const Reload = () => {
        console.log("Reloading tool data..."); 
        axios.get('http://localhost:4000/api/tools')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    useEffect(() => {
        Reload(); 
    }, []); 

    return (
        <div>
            <h2>Tool List</h2>
            <Tools myTools={data} ReloadData={Reload} />
        </div>
    );
}

export default ReadTool;
