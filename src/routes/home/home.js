import React, {Component} from 'react';
import Button from '../../components/button/button';

import {Link} from 'react-router';

import logo from '../../resources/img/logo.png';

export const Home = () => (
  <div>
    <div className="row row-center row-center-v h-full bg-primary">

      <div className="t-center p-2-2">

        <img className="w-200" src={logo} alt="Tasks logo"/>

        <div className="w-500 p-2-0">
          <p className="fs-16">Tasks is a simple application created to learn students at NTNU the concepts behind client side rendering, and the use of REST APIs.</p>
        </div>

        <div className="t-center p-0-1 fs-12">

          <Link to='/login'>
            <Button classNames={'btn-md btn-border-light rounded-3 m-1-1'}
                    loading={false}
                    text={'Sign in to the application'} />
          </Link>

        </div>

      </div>

    </div>
  </div>
);

export default Home