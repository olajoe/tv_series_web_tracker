import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import { ChakraProvider } from "@chakra-ui/react"
import './client.css';
import routes from './routes';
import Layout from './template/Layout'

ensureReady(routes).then(data =>
  hydrate(
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <After data={data} routes={routes} />
        </Layout>
      </ChakraProvider>
    </BrowserRouter>,
    document.getElementById('root')
  )
);

if (module.hot) {
  module.hot.accept();
}
