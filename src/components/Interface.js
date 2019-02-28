import React, { Component } from 'react';
import PageDetails from './PageDetails';

class Interface extends Component {
  constructor() {
    super();
    this.state = {
      pageDetails: false
    }
  };
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
          [name]: value
        })
      }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      }
    pageBearbeiten = (e) => {
        e.preventDefault();
        console.log(e.target.value); 
        const pageData = this.props.data.pageInfos[e.target.value];
        this.setState({
          pageDetails: pageData
        });
        
    }
    
    render() {


      return (
        
        <div>
        {this.state.pageDetails ? <PageDetails details={this.state.pageDetails}/> : 
          <div>
            <table>
              <tr>
                <th><h2>Pages</h2></th>
              </tr>
              {
                this.props.data.pages.map(page => {
                  const pageData = this.props.data.pageInfos[page];
                  return(
                    <tr>
                        <td>{pageData.headline}</td>
                        <td><button value={page} onClick={this.pageBearbeiten}>Bearbeiten</button></td>
                        <td><button value="5" onClick={this.pageBearbeiten}>Löschen</button></td>
                    </tr>                
                  )
                })
              }
            </table>
            <button value="5" onClick={this.pagebearbeiten}>Hinzufügen</button>
          </div>
        }
          </div>
      );
    }
  }
  
  export default Interface;