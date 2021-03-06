import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'
import { Navbar } from 'dicty-components-navbar'
import Header from 'dicty-components-header'
import styled from 'styled-components'
import Slideshow from './Components/Slideshow'
import { navItems } from './constants/navbar'
import './App.css'

const images = [
    'http://betatest.dictybase.org/images/dictyFront01.jpg',
    'http://betatest.dictybase.org/images/dictyFront01.jpg',
    'http://betatest.dictybase.org/images/dictyFront01.jpg',
    'http://betatest.dictybase.org/images/dictyFront01.jpg'
]
const Container = styled.div`
    display: flex;
    flex-direction: row;
    row-wrap: wrap;
    height: 50%;
    width: 100%;
`
const Item = styled.div`
    width: 50%;
    height: 400px;
`

class App extends Component {
    render() {
        return (
          <div className="App">
              <Header downloads="" cite="" info="" />
              <Navbar items={ navItems } theme={ {} }/>
              <Flex>
                  <Container>
                      <Item>
                          <Slideshow images={ images } time={ 2000 }/>
                      </Item>
                      <Item>
                          <div />
                      </Item>
                  </Container>
              </Flex>
          </div>
        );
    }
}

export default App;
