import { useState, useEffect } from "react"

import AddTodo from "./AddTodo"
import TaskList from "./TaskList"

export interface TaskProps {
  id: number
  text: string,
  isChecked: boolean
}

let nextId: number = 0
export default function Tasks() {
  const [tasks, setTasks] = useState(Array<TaskProps>)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('tasks')!);
    if (items) {
     setTasks(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTodo(text: string, isChecked: boolean) {
    if(text) setTasks([...tasks, {id: nextId++, text: text, isChecked: isChecked}])
  }

  function handleDeleteTodo(id: number) {
    setTasks(tasks.filter(todo => todo.id !== id))
  }

  function handleEditTodo(id: number, text: string, isChecked: boolean) {
    setTasks(tasks.map((task): TaskProps => {
      if(task.id === id)
        return {...task, text: text, isChecked: isChecked}
      return task
    }))
  }

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <AddTodo onAddTodo={handleAddTodo}/>
      <TaskList tasks={tasks} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo}/>
    </div>
  )
}