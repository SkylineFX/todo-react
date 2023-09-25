import { useState } from 'react'

export default function TaskList({tasks, onDeleteTodo, onEditTodo}: any) {
  return (
    <div className="w-fit flex flex-col gap-5">
      {tasks.map((item): any => 
        <Task key={item.id} task={item} onDelete={onDeleteTodo} onEdit={onEditTodo}/>
      )}
  </div>
  )
}

function Task({task, onDelete, onEdit}: any) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div key={task.id}
      className='flex gap-6 items-center'>
      <input type="checkbox" checked={task.isChecked} onChange={(e) => onEdit(e.target.checked, task.id, task.text)}
        className='w-7 h-7'/>
      {isEditing ? 
        <input type="text" value={task.text} onChange={(e) => onEdit(task.isChecked, task.id, e.target.value)}
          className=' indent-2 outline-none w-48 bg-slate-300 py-1'/> :
        <div className=' bg-slate-200 w-48 px-2 flex items-center py-1'>{task.text}</div>
      }
      <button onClick={() => setIsEditing(isEditing => !isEditing)}
        className='px-6 py-1 bg-[#434371] text-white rounded-md'>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => onDelete(task.id)}
        className='px-6 py-1 bg-[#434371] text-white rounded-md'>
          Delete
      </button>
    </div>
  )
}