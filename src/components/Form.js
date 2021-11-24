import React, { useState } from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css";

export default function Form() {

    const [dataArr, setDataArr] = useState([
        {id: uuidv4(), txt: "Intégrer la maquette d'un site web"},
        {id: uuidv4(), txt: "Développer une application web"},
        {id: uuidv4(), txt: "Créer une base de données"},
        {id: uuidv4(), txt: "Programmer le côté back-end"}
    ]);

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id
        })
        setDataArr(filteredState);
        toast.error('Vous avez supprimé une tâche');
    }

    const [stateInput, setStateInput] = useState();

    const linkedInput = e => {
        setStateInput(e)
        // console.log(e)
    }

    const addTodo = e => {
        e.preventDefault();

        const newDataArr = [...dataArr];
        const newTodo = {}
        newTodo.txt = stateInput;
        newTodo.id = stateInput;
        
        newDataArr.push(newTodo);
        setDataArr(newDataArr);

        setStateInput('');
        toast.success('Vous avez ajouté une tâche');
    }


    return (
        <div className="form-container m-auto px-xl-4 px-lg-4 px-md-4 col-12 col-sm-10 col-lg-6 pt-lg-5">
            <ToastContainer />
            <form className="my-xl-5" onSubmit={e => addTodo(e)}>
                <div className="d-flex align-items-center">
                    <input value={stateInput} onChange={e => linkedInput(e.target.value)} type="text" className="form-control" placeholder="Enter une tâche" />
                    <button className="mt-2 btn btn-success d-block mx-auto mb-2">AJOUTER</button>
                </div>
            </form>

            <ul className="list-group">
                {dataArr.map((item) => {
                    return (
                        <Item 
                            key={uuidv4()}
                            id={item.id}
                            txt={item.txt}
                            delFunc={deleteElement}
                        />
                    )
                })}
            </ul>
        </div>

    )
}
