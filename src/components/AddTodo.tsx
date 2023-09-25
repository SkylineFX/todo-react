import { useState } from 'react'

export default function AddTodo({onAddTodo}: any) {
  const [isChecked, setIsChecked] = useState(false)
  const [text, setText] = useState('')

  return (
    <div className='flex gap-6 items-center mb-16'>
      <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}
        className='w-7 h-7'/>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}
        className='indent-2 outline-none w-48 bg-slate-200 py-1'/>
      <button onClick={() => onAddTodo(text, isChecked)}
        className='px-6 py-1 bg-[#434371] text-white rounded-md'>
        Add
        </button>
    </div>
  )
}