import taskIcon from '../assets/taskIcon.svg'

export default function Hero() {
  return (
    <div className="flex flex-row-reverse items-start gap-2 xl:gap-4 bg-[#4c566a] w-full pt-20 justify-center">
      <h1 className="text-[#d8dee9] text-3xl xl:text-4xl">Tasks.</h1>
      <img src={taskIcon} alt="" className='w-8 h-8 xl:w-9 xl:h-9'/>
    </div>
  )
}

