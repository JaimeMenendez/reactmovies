import React from 'react'
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './header.styles'

import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

function Header () {
  return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt='rmdb-Logo' />
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-Logo' />
            </Content>
        </Wrapper>
  )
}

export default Header
