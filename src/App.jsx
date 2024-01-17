import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Task from './task'
import axios from 'axios';

import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  // const [tasksToServer, setTasksToServer] = useState([]);
  const [tasksFromServer, setTasksFromServer] = useState("");

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(state))
  // }, [state]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/todos").then((data) => {
      // console.log(data.data, "data");
      setTasks(data.data);
    }).catch((error) => {
      console.log(error, "error");
    })
  }, []);

  useEffect(() => {
    console.log(tasks, "tasks");
  }, [tasks]);

  const getTask = (id) => {
    let tsk_name = document.getElementById(id);
    console.log(tsk_name.value);
    // axios.post("http://localhost:3000/api/todos" + {
    //   name: tsk_name,
    // });

    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/todos',
      params: { "name": "dasda" }
    }).then((response) => {
      console.log(response.data);
    })

    // let jsonObj = {
    //   id: tasks.length,
    //   name: tsk_name,
    //   isDone: false
    // }

    // setTasks([...tasks, jsonObj]);
    tsk_name.value = "";
}

return (
  <>
    <div className="wrapper">
      <div className="item960px bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">TODOshechka</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Please enter a task</p>
          </div>
          <div className="mt-5 sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                name="taskName"
                id="taskNameEl"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 input_placeholder_pad"
                placeholder="profit quota 1530"
              />
            </div>
            <button
              type="button"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
              onClick={() => getTask('taskNameEl')}
            >
              Save
            </button>
          </div>
        </div>
        <Task tasks={tasks} />
        {/* <p>{tasks}</p> */}
      </div>
    </div>
  </>
)
}

export default App
