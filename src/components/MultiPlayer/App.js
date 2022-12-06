import React from 'react'
import mySound from './Audio/sample.mp3'

function MyButton(){
    const [playSound] = useSound(mySound)
    
    return (
      <button type="module" onClick={() => playSound()}>
         Play Sound
      </button>
    )
  }

export default App