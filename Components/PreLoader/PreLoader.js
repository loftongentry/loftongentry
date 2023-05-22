import { useLayoutEffect, useRef } from "react"
import { preLoaderAnim } from "./Loader"
import { gsap } from "gsap"
import { preLoaderStyle, imageContainerStyle, runningBoiStyle, textContainerStyle, textWrapperStyle, spanColumnStyle, spanStyle } from "./PreLoaderStyles"

const PreLoader = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      preLoaderAnim()
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="pre-loader" style={preLoaderStyle}>
      <div className="image-container" style={imageContainerStyle}>
        <img className="running-boi" src='/Images/runningBoi.jpg' alt='runningBoi' style={runningBoiStyle} />
      </div>
      <div className="text-wrapper" style={textWrapperStyle}>
        <div className="text-container" style={textContainerStyle}>
          <div className='span-col' style={spanColumnStyle}>
            <span style={spanStyle}>Runner</span>
          </div>
          <div className="span-col" style={spanColumnStyle}>
            <span style={spanStyle}>Inovator</span>
          </div>
          <div className="span-col" style={spanColumnStyle}>
            <span style={spanStyle}>Creator</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreLoader