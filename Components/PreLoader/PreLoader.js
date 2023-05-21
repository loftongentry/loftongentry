import { useEffect, useLayoutEffect, useRef } from "react"
import { preLoaderAnim } from "./Loader"
import { gsap } from "gsap"
import "../../styles/PreLoader.module.css"

const PreLoader = () => {
  const tl = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      preLoaderAnim()
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="preLoader">
      <div className="image-container">
        <img className="runningBoi" src='/Images/runningBoi.jpg' alt='runningBoi' height='200' />
      </div>
      {/* <div className="text-container">
        <span>Innovator </span>
        <span>Creator </span>
        <span>Runner</span>
      </div> */}
    </div>
  )
}

export default PreLoader