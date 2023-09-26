import { useState } from 'react'

import addIcon from '../assets/addIcon.svg'

export default function AddTodo({onAddTodo}: any) {
  const [isChecked, setIsChecked] = useState(false)
  const [text, setText] = useState('')

  function handleAdd(e?: React.FormEvent<HTMLFormElement>)
  {
    e?.preventDefault() 
    onAddTodo(text, isChecked)
    setText('')
  }

  return (
    <div className='w-full bg-[#4c566a] flex justify-center'>
      <div className='flex items-center justify-center w-full  max-w-4xl py-12 text-[#d8dee9]'>
        <div className='flex items-center justify-center bg-[#3b4252] h-10 w-10 rounded-l-md'>
          <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}
            className='h-[16px] aspect-square appearance-none select-none cursor-pointer rounded-full outline outline-2 outline-[#a3be8c] transition-all duration-300  checked:bg-[#a3be8c] dark:checked:outline-none'/>
      </div>

      <form onSubmit={(e) => handleAdd(e)} className='basis-8/12'>
        <input placeholder="Add a task" type="text" value={text} onChange={(e) => setText(e.target.value)}
          className='w-full indent-2 outline-none bg-[#3b4252] h-10 min-w-0'/>
      </form>


      <div className='flex items-center justify-center bg-[#3b4252] h-10 w-10 rounded-r-md'>
        <button onClick={() => handleAdd()}
          className='w-full h-full grid place-content-center'>
          <img src={addIcon} alt="" className='w-6 h-6'/>
        </button>
      </div>
      </div>
    </div>
    
  )
}