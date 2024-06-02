import React from 'react'
import logo from "./Group.png"
import firstGroup from "./firstGroup.png"
import "./Home.css"

const Home = () => {
  return (
    <>
      <div id='navbar'>
        <div id="left">
          <ul>
            <li>
              <img src={logo} alt="logo" />
            </li>
            <li>
              <a href="#navbar">
                Home
              </a>
            </li>
            <li><a href="#thirdPage">
              About Us
            </a></li>
            <li><a href="#">
              Pricing
            </a></li>
            <li><a href="#secondPage">
              Features
            </a></li>
          </ul>
        </div>
        <div id="right">
          <button>Download</button>
        </div>
      </div>
      <div id="firstPage">

      </div>
      <div id="secondPage">

      </div>
      <div id="thirdPage"></div>
      <div id="forthPage"></div>
      <div id="fifthPage"></div>
      <div id="sixthPage"></div>
      <div id="seventhPage"></div>
      <div id="eighthPage"></div>

    </>
  )
}

export default Home