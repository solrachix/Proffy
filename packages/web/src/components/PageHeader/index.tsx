import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { PageHeaderComponent, TopBarContainer, HeaderContent, BackgroundImg } from './styles'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import headerBackground from '../../assets/images/header-background.svg'

interface PageHeaderProps {
  backgroundImg?: boolean;
  pageName?: string;
  titleComponent?: React.FC,
  title?: string;
  description?: string;
  align?: string;
  children?: unknown;
}

const PageHeader: React.FC<PageHeaderProps> = ({ backgroundImg = false, align = 'start', pageName, titleComponent = () => <></>, title, description, children }) => {
  return (
    <PageHeaderComponent>
      <TopBarContainer>
        <div>
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <p>{pageName}</p>
          <img src={logoImg} alt="Proffy" />
        </div>
      </TopBarContainer>

      <HeaderContent align={align} >
        {backgroundImg && <BackgroundImg src={headerBackground} />}

        {titleComponent({}, null)}
        <strong>{title}</strong>

        <p>{description && description}</p>

        {children}
      </HeaderContent>
    </PageHeaderComponent>
  )
}

PageHeader.propTypes = {
  backgroundImg: PropTypes.bool,
  align: PropTypes.string,
  pageName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any
}

PageHeader.defaultProps = {
  backgroundImg: false,
  align: 'start'
}

export default PageHeader
