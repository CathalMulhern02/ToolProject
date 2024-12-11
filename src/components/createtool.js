import axios from "axios";
import { useState } from "react";

const CreateTool = () => {

    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const tool = {name,state,price};
        console.log(tool);

        axios.post('http://localhost:4000/api/tools',tool)
        .then((res)=>{console.log(res.data)})
        .catch();
    }

    return (
        <div>
            <h3>Hello from create component!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Tool Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Tool State: </label>
                    <input type="text"
                        className="form-control"
                        value={state}
                        onChange={(e) => { setState(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Tool Price: </label>
                    <input type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />


                </div>
                <div className="form-group">
                    <label>Add Tool image: </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Tool"></input>
                </div>
            </form>
        </div>
    );
}
export default CreateTool;