import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [characterAllowed , setCharacterAllowed] = useState(false)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [password , setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz"
    if (characterAllowed) str += "!@#$%^&*()_-{}"
    if (numberAllowed) str += "0123456789"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length , characterAllowed , numberAllowed , setPassword])

  const copyGeneratedPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => passwordGenerator() , [length , characterAllowed, numberAllowed , passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>
          Passowrd Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value = {password}
            className='outline-none bg-white w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyGeneratedPassword}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex text-sm gap-x-2'>
            <input type="range"
              min={6}
              max={100}
              value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
            />
              <label>Length: {length}</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input type="checkbox"
              defaultChecked= {numberAllowed}
              id='numberInput'
              onChange={() => {setNumberAllowed((prev) =>!prev)}}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input type="checkbox"
              defaultChecked={characterAllowed}
              id='charallowed'
              onChange={() => {setCharacterAllowed((prev) =>!prev)}}
            />
            <label htmlFor="charallowed">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
