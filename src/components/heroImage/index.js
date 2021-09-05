import { Wrapper, Content, Text } from './heroImage.styles'
import React from 'react'

const HeroImage = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
    <Content>
           <Text>
               <h1>{title}</h1>
               <p>{text}</p>
           </Text>
    </Content>
    </Wrapper>
  )
}

export default HeroImage
