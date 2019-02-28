import React, { Component } from 'react';

class PageDetails extends Component {
  constructor() {
    super();
    this.state = {
      pageDetails: false
    }
  };
  pageBearbeiten = (e) => {
    e.preventDefault();
    console.log(e.target.value); 
    const componentData = this.props.data.pageInfos.pageData[e.target.value];
    this.setState({
      componentDetails: componentData
    });
    
}
    render() {

      
        return (
          <div>
        {//this.state.pageDetails ? <PageDetails details={this.state.pageDetails}/> : 
          <div>
            <table>
              <tr>
                <th><h2>{this.props.details.headline}</h2></th>
              </tr>
              {
                this.props.data.pages.map(page => {
                  const pageData = this.props.data.pageInfos[page];
                  this.props.data.pageInfos.pageData.map(component => {
                    const componentData = this.props.data.pageInfos.pageData[component];
                    return(
                      <tr>
                          <td>{pageData.headline}</td>
                          <td><button value={component} onClick={this.pageBearbeiten}>Bearbeiten</button></td>
                          <td><button value="5" onClick={this.pageBearbeiten}>Löschen</button></td>
                      </tr>                
                    )
                  })
                })
              }
            </table>
            <button value="5" onClick={this.pagebearbeiten}>Hinzufügen</button>
          </div>
        }
          </div>
            /*<div>
              <h2>
                {this.props.details.headline}
              </h2>
            </div>*/
        )
      }
    }
    export default PageDetails;
