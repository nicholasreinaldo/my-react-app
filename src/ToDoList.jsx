import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");
    
    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    } 

    function moveTaskDown(index) {

    }

    return(<div className="to-do-list">
        <h1>To-Do_list</h1>

        <div>
            <input type ="text" 
                   placeholder="Enter a task..."
                   value={newTask}
                   onChange={handleInputChange}
                   />

            <button
                className="add-button"
                onClick={addTask}>
                Add                    
            </button>
        </div>
        <ol>
            {tasks.map((task,index) => 
                <li></li>
            )}
        </ol>

    </div>)
}

export default ToDoList