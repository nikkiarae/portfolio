
import React from 'react'
import { Outlet } from "react-router-dom";
import style from 'styled-components'
import Header from "./Header/Header";
import Footer from './footer/Footer';

const LayoutContainer = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .main {
    height: 100%;
  }
`

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <div className="main">
         <Outlet/>
      </div>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;