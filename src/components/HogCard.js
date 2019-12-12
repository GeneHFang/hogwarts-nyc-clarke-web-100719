import React from 'react';
// import hogimg from '../hog-imgs';



export default class HogCard extends React.Component{
    state = {
        showDetails: false
    }

    clickHandle = () =>{
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    showDetails = () =>{
        return (
            <div>
                <p>Specialty: {this.props.hogObj.specialty}</p>
                <p>Greased: {this.props.hogObj.greased ? "Oily" : "Friction"}</p>
                <p>Weight: {this.props.hogObj.weight}</p>
                <p>Highest Medal Achieved: {this.props.hogObj["highest medal achieved"]}</p>
            </div>
        )
    }

    render(){
        // console.log("inside")
        let img = this.props.hogObj.name.replace(/ /g,"_").toLowerCase();
        let imagePath = require(`../hog-imgs/${img}.jpg`);
        console.log(imagePath);
        return(
            <div className="ui eight wide column"><br/>
                <p>{this.props.hogObj.name}</p>
                <img src={imagePath} /><br/>
                <button onClick={this.clickHandle}>{this.state.showDetails ? "Hide" : "Show"} Details</button>
                {this.state.showDetails ? this.showDetails() : null}
            </div>
        )
    }

}