import { gsap } from "gsap";

const tl = gsap.timeline()

export const preLoaderAnim = () => {
  tl.fromTo(
    '.image-container',
    { x: '100%' },
    { duration: 7, x: '-100%' }
  )
}