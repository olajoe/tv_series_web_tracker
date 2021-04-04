import React, { Component } from 'react';
import logo from './react.svg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
    </div>
  );
}

Home.getInitialProps = async ({
  req,
  res,
  match,
  history,
  location,
  ...ctx
}) => {
  return { whatever: 'stuff' };
};

export default Home;
