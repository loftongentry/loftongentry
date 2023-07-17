import { useEffect } from "react"
import { gsap } from "gsap"
import { preLoaderStyle, textContainerStyle, textWrapperStyle, spanColumnStyle, spanStyle } from "./PreLoaderStyles"

const PreLoader = () => {
  useEffect(() => {
    let disableScroll = () => {
      window.addEventListener('scroll', preventScroll, { passive: false })
    }

    let preventScroll = (event) => {
      event.preventDefault()
      event.stopPropagation()
    }

    let enableScrolling = () => {
      window.removeEventListener('scroll', preventScroll)
    }

    disableScroll()

    const tl = gsap.timeline()

    let ctx = gsap.context(() => {
      gsap.set('.span-col span', {
        opacity: '0'
      })

      tl.to('.span-col span', {
        opacity: '1',
        y: '20',
        stagger: '0.5',
        delay: 1.5
      })
        .to('.span-col', {
          y: '100%',
          duration: 1,
          ease: 'power3.inOut',
          stagger: 0.5,
          delay: 1
        })
        .to('.text-wrapper', {
          y: '100%',
          duration: 0.5,
          ease: 'power3.inOut',
        })
        .to('.pre-loader', {
          opacity: 0,
          transformOrigin: 'bottom',
          duration: 0,
          onComplete: enableScrolling
        })
    })

    return () => {
      enableScrolling()
      ctx.revert()
    }
  }, [])

  return (
    <div className="pre-loader" style={{...preLoaderStyle, pointerEvents: "none"}}>
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