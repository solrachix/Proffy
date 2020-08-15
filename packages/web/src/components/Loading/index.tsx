import React, { useEffect } from 'react'

import successBackground from '../../assets/images/success-background.svg'

import { Container, Img, LogoIcon } from './styles'

interface Props {
  actived: boolean;
}

const Concluded: React.FC<Props> = ({ actived }) => {
  const $ = (elem: string): HTMLElement | null => window.document.querySelector<HTMLElement>(elem)

  useEffect(() => {
    console.log(actived)
    if (actived) {
      const Container = $('.load-container')
      const containerHeight = Container?.clientHeight
      const containerWidth = Container?.clientHeight

      if (Container) {
        Container.style.display = 'flex'

        Container.animate({
          width: [`${containerWidth}px`, `${window.innerWidth}px`],
          height: [`${containerHeight}px`, `${window.innerHeight}px`],
          fontSize: ['0px', '16px']
        }, {
          duration: 1000, // number in ms [this would be equiv of your speed].
          easing: 'ease-in-out',
          iterations: 1 // infinity or a number.
          // fill: ''
        })

        Container.style.width = `${window.innerWidth}px`
        Container.style.height = `${window.innerHeight}px`
        Container.style.top = '0'
        Container.style.fontSize = '16px'
      }
    } else {
      const Container = $('.load-container')
      if (Container) {
        Container.style.display = 'none'
      }
    }
  }, [actived])

  return (
    <Container className='load-container' >
      <Img src={successBackground} />

      <LogoIcon />
    </Container>
  )
}

export default Concluded
