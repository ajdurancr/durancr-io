import React from 'react'
import Head from 'next/head'

import Nav from '../../components/Nav'
import styles from '../index.styles.sass'

const Blog = () => (
  <>
    <Head>
      <title>Blog</title>
    </Head>
    <Nav />

    <div className={styles.hero}>
      <h1 className={styles.title}>Coming Soon...</h1>
    </div>
  </>
)

export default Blog