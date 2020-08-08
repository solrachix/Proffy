import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { PageHeaderComponent, TopBarContainer, HeaderContent } from './styles'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

interface PageHeaderProps {
  title?: string;
  description?: string;
  children?: unknown;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => {
  return (
    <PageHeaderComponent>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent>
        <strong>{title}</strong>

        <p>{ description && description}</p>

        {children}
      </HeaderContent>
    </PageHeaderComponent>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any
}

// PageHeader.defaultProps = {
// }

export default PageHeader
