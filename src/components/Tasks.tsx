import { useState } from "react"

import AddTodo from "./AddTodo"
import TaskList from "./TaskList"

export interface Tasks {
  id: number
  text: string,
  isChecked: boolean
}

const initialTasks: Tasks[] = []
let nextId: number = 0

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks)

  function handleAddTodo(text: string, isChecked: boolean) {
    if(text) setTasks([...tasks, {id: ++nextId, text: text, isChecked: isChecked}])
  }

  function handleDeleteTodo(id: number) {
    setTasks(tasks.filter(todo => todo.id !== id))
  }

  function handleEditTodo(isChecked: boolean, id: number, text: string,) {
    setTasks(tasks.map((task): any => {
      if(task.id === id)
        return {...task, text: text, isChecked: isChecked}
      return task
    }))
  }

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo}/>
      <TaskList tasks={tasks} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo}/>
    </div>
  )
}