import React from 'react'
import propTypes from 'prop-types'
import get from 'lodash.get'

import { Logo, Menu, Component } from '..'
import styles from './Header.styles.sass'

const Header = ({ pageUrl, menu, socialMedia }) => (
  <div className={styles.header}>
    <div className={styles.topMenu}>
      <Logo className={styles.logo} theme="light" />
      <Component {...(socialMedia)} />
    </div>
    <Menu pageUrl={pageUrl} menu={get(menu, 'fields')} />
  </div>
)

Header.defaultProps = {
  socialMedia: {},
}

Header.propTypes = {
  menu: propTypes.object.isRequired,
  pageUrl: propTypes.string.isRequired,
  socialMedia: propTypes.object,
}

export default Header
