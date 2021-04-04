import React from 'react'
import { Container } from '@chakra-ui/react'
import PropTypes from 'prop-types'

import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
    return (
        <>
          <Header/>
          <Container centerContent minHeight="min-content">
            {children}
          </Container>
          <Footer/>
        
        </>
    )
}

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout


