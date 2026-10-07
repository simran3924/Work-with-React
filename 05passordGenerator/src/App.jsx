import { useState , useCallback , useEffect , useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [passord, setPassord] = useState("");

  const passwordRef = useRef(null)

  const passordGenerator = useCallback(() => {
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (charallowed) str += "!@#$%^&*(){}[]"

    for( let i  = 1; i <= length; i++){
      let char  = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassord(pass)

  }, [length, numberallowed , charallowed , setPassord]);

  const copyPassordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
     window.navigator.clipboard.writeText(passord)
   },[passord])

  useEffect(() => {
    passordGenerator()
  }, [length, numberallowed, charallowed, passordGenerator]) 
  return (
    
    <div claasName='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-red-500 '>
      <h1 className=' bg-yellow-500 text-black text-center my-3'>Passord Generator</h1>
      
    <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
      <input
       type="text"
       value={passord}
       className="outline-none w-full py-1 px-3 "
       placeholder="Passord"
       readOnly
       ref={passwordRef}
        />
       <button
       onClick={copyPassordToClipboard}
       className='outline-none bg-blue-700 text-black px-3 py-0.5 shrink-0'>Copy</button>
        </div>

      <div className=' w-full flex text-sm gap-x-2'>
        <div className=' w-full flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className=' w-full flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numberallowed}
          id="numberInput"
          onChange={() => {
            setNumberallowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
         <div className=' w-full flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={charallowed}
          id="characterInput"
          onChange={() => {
            setNumberallowed((prev) => !prev);
          }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
    </div>
    </div>
  
  )
}

export default App
