import React from 'react';

import './index.css';

import Weather from './Weather'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
class Page extends React.Component {
    render() {
        return (
            <div>
                 <Header heading="Weather Portal"/>
      <Nav/>
    <Weather/>
    <Footer authorName="Eby Saju"/>
                </div>
        )
    }
}
export default Page


