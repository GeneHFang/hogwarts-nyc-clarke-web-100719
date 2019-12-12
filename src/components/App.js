import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from './HogCard';

class App extends Component {
  
  state={
    showGreasedOnly: false,
    sortedByName: false,
    sortedByWeight: false
  }

  renderHog = () =>{
      // deep copy array
      let hogArr = JSON.parse(JSON.stringify(hogs)); 

    
      if (this.state.sortedByName) {
        hogArr = hogArr.sort((a,b)=>{
          if ( a.name < b.name ){
                  return -1;
                }
                if ( a.name > b.name ){
                  return 1;
                }
                return 0;
        })
      }
      else if (this.state.sortedByWeight){
        hogArr = hogArr.sort((a,b)=>{
          if ( a.weight < b.weight ){
            return -1;
          }
          if ( a.weight > b.weight ){
            return 1;
          }
          return 0;
        })
      }
      else {
        hogArr = hogs;
      }

      // if (this.state.sortedByWeight) {hogArr = hogArr.filterbyWeight()}
    
      return hogArr.map((hog)=>
      {
        if (this.state.showGreasedOnly){
          return hog.greased ? <HogCard hogObj={hog}/> : null
        }
        else{
          return <HogCard hogObj={hog}/>
        }
      })
  }

  greaseClick = () =>{
    this.setState({
      showGreasedOnly: !this.state.showGreasedOnly
    })
  }

  nameSortClick = () =>{
    if (this.state.sortedByWeight) {
      this.setState({
        sortedByName: !this.state.sortedByName,
        sortedByWeight: false
      })
    }
    else{
      this.setState({
        sortedByName: !this.state.sortedByName
      })
    }
  }

  weightSortClick = () =>{
    if (this.state.sortedByName) {
      this.setState({
        sortedByWeight: !this.state.sortedByWeight,
        sortedByName: false
      })
    }
    else{
      this.setState({
        sortedByWeight: !this.state.sortedByWeight
      })
    }
  }
  
  render() {
    return (
      <div className="App">
      <Nav />
      <br/>
      <button onClick={this.greaseClick}>{this.state.showGreasedOnly ? "Show Not" : "Show"} Greased Hog Bois</button>
      <button onClick={this.nameSortClick}>{this.state.sortedByName ? "Don't " : ""}Sort by Name</button>
      <button onClick={this.weightSortClick}>{this.state.sortedByWeight ? "Don't " : ""}Sort by Weight</button> <br/><br/>
      <div className="ui grid container">{this.renderHog()}</div>
      </div>
    )
  }
}
// <div className="App">
//           < Nav />
          

//       </div>
export default App;
