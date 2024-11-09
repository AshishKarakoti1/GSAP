import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const App = () => {
  
  // Gsap using useGSAP
  // useGSAP(()=>{
  //   gsap.to(".box",{
  //     x:1000,
  //     duration:2,
  //     delay:1
  //   })
  // })

  // Gsap using useRef
  const gsapRef = useRef()

  useGSAP(()=>{
    gsap.to(gsapRef.current,{
      x:1200,
      duration:2,
      delay:1,
      rotate:720
    })
  })

  return (
    <main>
      <div ref={gsapRef} className="box">

      </div>
    </main>
  )
}

export default App