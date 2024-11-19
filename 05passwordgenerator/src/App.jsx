import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  //? help us monitor the lenght

  const [numberAllowed, setNumberAllowed] = useState(false)
  //? by default numbers are not checked or allowed
  
  const [charAllowed, setCharAllowed] = useState(false)
  //? by default characters are not checked or allowed

  const [password, setPassword] = useState('')
  //? the password is initially set to empty

  const passwordRef = useRef(null)

  // const generatePassword = useCallback(() => {
  //   //* function to generate password, but there is a high chance of not adding numbers and special characters when the lenght of the password is minimun, because of the probability of selecting a number or a special character from a string which has 26 Alphabets but only 10 Numbers and 12 Special Characters
    
  //   let pass = ""
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  //   //? string of characters to choose from

  //   if(numberAllowed) str += "0123456789"
  //   //? if numbers are allowed we add numbers to the string

  //   if(charAllowed) str += "!@#$%^&*()_+"
  //   //? if characters are allowed we add these special characters to the string

  //   for(let i = 1; i < length; i++) {
  //     const char = Math.floor(Math.random() * str.length + 1)
  //     pass += str.charAt(char)
  //   }
  //   setPassword(pass)
  //   //? this changes the password state

  // }, [length, numberAllowed, charAllowed])
  // //? these after the array are the dependencies

  const generatePassword = useCallback(() => {
    //* function to generate password, this will ensure that at least one number and one special character are included in the password when they are checked or selected, and that the rest of the password is randomly generated characters
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let mandatoryChars = "";
    //? Ensure at least one character from each type is included
  
    if (numberAllowed) {
      str += "0123456789";
      //? Ensure at least one number is included
      mandatoryChars += "0123456789".charAt(Math.floor(Math.random() * 10));
    }
  
    if (charAllowed) {
      str += "!@#$%^&*()_+";
      //? Ensure at least one special character is included
      mandatoryChars += "!@#$%^&*()_+".charAt(Math.floor(Math.random() * 12));
    }
  
    //? Fill the rest of the password with random characters from the pool
    for (let i = 0; i < length - mandatoryChars.length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
  
    // Shuffle the password to randomize mandatory characters' positions
    pass += mandatoryChars;
    pass = pass.split("").sort(() => Math.random() - 0.5).join("");
  
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    
  }
  useEffect(()=>{
    generatePassword()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, numberAllowed, charAllowed])
  
  return (
    
    //  <h1 className='bg-green-300' >Set up Ready</h1> 

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      
      </div>
      
      <div
      className='flex text-sm gap-x-2'
      >
        
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id=""
          />
          <label htmlFor="length">Length: {length}</label>
        
        </div>
        
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
          name=""
          id="" />
          <label htmlFor="number">Numbers</label>
        
        </div>
        
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          name=""
          id="" />
          <label htmlFor="charInput">Character</label>
        
        </div>
        
      </div>
    
    </div>
  
  )
}

export default App
