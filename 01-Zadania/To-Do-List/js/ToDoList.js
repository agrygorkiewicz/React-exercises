import React, {useState} from 'react';


export default function ToDoList({tasks}) {
    const [toDoItems, setToDoItems] = useState([...tasks]);
    const [newTaskName, setNewTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setToDoItems(prevTasks => [...prevTasks, {
            id: prevTasks.length + 1,
            name: newTaskName,
            done: false,
        },
        ]);
        setNewTaskName("");
    }
        const handleClick = (taskID) => {    // na klikniecie task zaznaczy sie na done
            const stateCopy = [...toDoItems];
            stateCopy.forEach(item=>{
                if(item.id === taskID){
                    item.done = !item.done;
                }

            })
            setToDoItems(stateCopy);
        }


    return (
        <>
            <div className="toDoList">
                <form className="header" onSubmit={handleSubmit}>
                    <h2>Twoja lista zadań</h2>
                    <input type="text" placeholder="np. Zrobić zakupy" value={newTaskName}
                           onChange={(e) => setNewTaskName(e.target.value)}/>
                    <button disabled={newTaskName === ""} style={{color: newTaskName === "" ? "white" : "#000000"}}
                            className="btn-add">Dodaj
                    </button>
                </form>

                <ul>
                    {toDoItems.map(toDoItem => (
                        <ToDoItem key = {toDoItem.id} {...toDoItem} toggleDone={handleClick} />
                        )
                    )}

                </ul>
            </div>
        </>
    )
};

const ToDoItem = ({id, done, name, toggleDone}) => {
    return (
        <li onClick={() => toggleDone(id)}
            className={done ? "done" : ""}>{name}</li>

    )
}