import Tasks from "./components/Tasks"
import Hero from "./components/Hero"

export default function App() {
  return (
    <div className="w-full h-full bg-[#2e3440] text-[#d8dee9] flex flex-col items-center font-poppins overflow-auto">
      <Hero/>
      <Tasks/>
    </div>
  )
}