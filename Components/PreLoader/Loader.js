import { gsap } from "gsap";

const tl = gsap.timeline()

export const preLoaderAnim = () => {
  gsap.set('.image-container', {
    y: '50%'
  })
  
  tl.fromTo(
    '.image-container',
    { x: '100%' },
    { duration: 7, x: '-100%' }
  )
}