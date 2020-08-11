import React, { useContext, useEffect } from 'react'

import successBackground from '../../assets/images/success-background.svg'
import doneIcon from '../../assets/images/icons/done.svg'

import { ThemeContext } from 'styled-components'
import { rgba } from 'polished'
import Text from '../Text'
import { Container, Content, Img, Icon, Button } from './styles'

interface Props {
  actived: boolean;
  title: string;
  description: string;
  buttonText: string;
}
const Concluded: React.FC<Props> = ({ actived, title, description, buttonText, ...props }) => {
  const theme = useContext(ThemeContext).colors
  const $ = (elem: string): HTMLElement | null => window.document.querySelector<HTMLElement>(elem)

  useEffect(() => {
    if (actived) {
      const Container = $('.concluded-container')
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
        Container.style.fontSize = '16px'
      }
    }
  }, [actived])

  return (
    <Container { ...props } className='concluded-container' >
      <Img src={successBackground} />

      <Content>
        <Icon src={doneIcon} />
        <Text
          align="center"
          text={title} size={3} weight="bold" />
        <Text
          color={rgba(theme.white, 0.6)}
          align="center"
          text={description}
        />

        <Button>{buttonText}</Button>
      </Content>
    </Container>
  )
}

export default Concluded
