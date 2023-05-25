import { gsap } from "gsap";

const tl = gsap.timeline()

export const preLoaderAnim = () => {
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
    });
}