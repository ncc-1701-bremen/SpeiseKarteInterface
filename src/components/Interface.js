import React, { Component } from 'react';

class Interface extends Component {
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
    onePageClick = (e) => {
        e.preventDefault();
        console.log(e.target.value); 
    }
    render() {
      return (
        <div>
        <h2>Page</h2>
        <form name="page" onSubmit={this.handleSubmit}>
            <div>
                <span>
                    <p>
                        <table>
                            <tr>
                                <th>Text</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button value="5" onClick={this.onePageClick}>Bearbeiten</button></td>
                                <td><button value="5" onClick={this.onePageClick}>Löschen</button></td>
                            </tr>
                        </table>  
                    </p>
                    <button value="5" onClick={this.onePageClick}>Hinzufügen</button>
                </span>
            </div>
        </form>
    </div>
      );
    }
  }
  
  export default Interface;