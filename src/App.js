import React, { Component } from 'react';
import Interface from './components/Interface';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      speisekarte: {
        swipeTimer: 10,
        pages: ['page1', 'page2'],
        pageInfos: {
          page1: {
            headline: 'page1',
            sidePicture: true,
            components: ['component1', 'component2'],
            componentInfos: {
              component1: {
                componentType: 'priceList',
                data: {
                  size: {
                    height: 20,
                    width: 100
                  },
                  products: [
                    {
                      name: 'burger',
                      price: 10
                    },
                    {
                      name: 'fries',
                      price: 15
                    }]
                }
              },
              component2: {
                componentType: 'image',
                data: {
                  size: {
                    height: 20,
                    width: 100
                  },
                  imgUri: 'exampleBase64'
                }
              }
            }
          },
          page2: {
            headline: 'page2',
            sidePicture: true,
            components: ['component1', 'component2'],
            componentInfos: {
              component1: {
                componentType: 'priceList',
                data: {
                  size: {
                    height: 20,
                    width: 100
                  },
                  products: [
                    {
                      name: 'burger',
                      price: 10
                    },
                    {
                      name: 'fries',
                      price: 15
                    }]
                }
              },
              component2: {
                componentType: 'image',
                data: {
                  size: {
                    height: 20,
                    width: 100
                  },
                  imgUri: 'exampleBase64'
                }
              }
            }
          }
        }
      }
    }
  }
  render() {
    return (
      <Interface data={this.state.speisekarte}/>
    );
  }
}

export default App;
