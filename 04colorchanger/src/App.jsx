import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-28 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white text-black rounded-3xl px-3 py-2 '>
            <button onClick={()=> setcolor("red")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor:"red"}}>RED</button>
            <button onClick={()=> setcolor("green")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor:"green"}}>GREEN</button>
            <button onClick={()=> setcolor("blue")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor:"blue"}}>BLUE</button>
            <button onClick={()=> setcolor("orange")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor:"orange"}}>ORANGE</button>
            <button onClick={()=> setcolor("yellow")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor:"yellow"}}>YELLOW</button>
            <button onClick={()=> setcolor("black")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor:"black"}}>BLACK</button>
            <button onClick={()=> setcolor("purple")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor:"purple"}}>PURPLE</button>
            <button onClick={()=> setcolor("magenta")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor:"magenta"}}>MAGENTA</button>
            <button onClick={()=> setcolor("white")} className='outline-none rounded-full px-4 py-1 text-black shadow-lg' style={{backgroundColor:"white"}}>WHITE</button>
            <button onClick={()=> setcolor("pink")} className='outline-none rounded-full px-4 py-1 text-white shadow-lg' style={{backgroundColor:"pink"}}>PINK</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
