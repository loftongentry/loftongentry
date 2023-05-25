//TODO: Remove artifact
import { useEffect } from "react"
import { preLoaderAnim } from "./Loader"
import { gsap } from "gsap"
import { preLoaderStyle, textContainerStyle, textWrapperStyle, spanColumnStyle, spanStyle } from "./PreLoaderStyles"

const PreLoader = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      preLoaderAnim()
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="pre-loader" style={preLoaderStyle}>
      <div className="text-wrapper" style={textWrapperStyle}>
        <div className="text-container" style={textContainerStyle}>
          <div className='span-col' style={spanColumnStyle}>
            <span style={spanStyle}>Creator</span>
          </div>
          <div className="span-col" style={spanColumnStyle}>
            <span style={spanStyle}>Innovator</span>
          </div>
          <div className="span-col" style={spanColumnStyle}>
            <span style={spanStyle}>Runner</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreLoader