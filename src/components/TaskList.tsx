import { useState } from 'react'

import { TaskProps } from './Tasks'
import deleteIcon from '../assets/deleteIcon.svg'
import saveIcon from '../assets/saveIcon.svg'

export default function TaskList({tasks, onDeleteTodo, onEditTodo}: any) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      {tasks.map((task: TaskProps) => 
        <Task key={task.id} task={task} onDelete={onDeleteTodo} onEdit={onEditTodo}/>
      )}
  </div>
  )
}

function Task({task, onDelete, onEdit}: any) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div key={task.id} className='flex items-center justify-center w-full max-w-4xl text-slate-200'>
      <div className={`${isEditing ? 'bg-[#434c5e]' : 'bg-[#3b4252]'} flex items-center justify-center  h-10 w-10 rounded-l-md`}>
        <input type="checkbox" checked={task.isChecked} onChange={(e) => onEdit(task.id, task.text, e.target.checked)}
          className='h-[16px] aspect-square appearance-none select-none cursor-pointer rounded-full outline outline-2 outline-[#a3be8c] transition-all duration-300  checked:bg-[#a3be8c] dark:checked:outline-none'/>
      </div>
        
      {isEditing ? 
        <form onSubmit={e => {e.preventDefault(), setIsEditing(false)}} className='basis-8/12 w-4/5'>
          <input type="text" value={task.text} autoFocus onChange={(e) => onEdit(task.id, e.target.value, task.isChecked)}
          className='indent-2 outline-none bg-[#434c5e] h-10 w-full'/>
        </form> :
        <div onDoubleClick={() => setIsEditing(true)} className='basis-8/12 bg-[#3b4252] h-10 px-2 flex items-center py-1 w-4/5 truncate select-none'>{task.text}</div>
      }

      <div className={`${isEditing ? 'bg-[#434c5e]' : 'bg-[#3b4252]'} flex flex-col items-center justify-center gap-1 rounded-r-md w-10 h-10`}>
        <button className=''>
          {!isEditing ? 
            <img src={deleteIcon} alt="" className='w-6 h-6' onClick={() => onDelete(task.id)} /> : 
            <img src={saveIcon} alt="" className='w-6 h-6' onClick={() => setIsEditing(false)} />
          }
        </button>
      </div>

    </div>
  )
}