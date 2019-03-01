import React, { Component } from 'react';

class PageDetails extends Component {
  constructor() {
    super();
    this.state = {
      componentDetails: false
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
            {//this.state.componentDetails ? <ComponentsDetails details={this.state.componentsDetails}/> : 
              <div>
                <table>
                  <tr>
                    <th><h2>{this.props.details.headline}</h2></th>
                  </tr>
                  {
                    this.props.details.components.map(components =>{
                      const componentsData = this.props.details.componentInfos[components];
                      return(
                        <tr>
                          <td>{componentsData.componentType}</td>
                          <td><button value={components} onClick={this.componentsBearbeiten}>Bearbeiten</button></td>
                          <td><button value="5" onClick={this.componentsBearbeiten}>Löschen</button></td>
                      </tr>   
                      )
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
