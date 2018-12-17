import React from "react";
import Cards from "./Cards";
import "../App.css";
import base from "../base";
import EditRestaurantsForm from "./EditRestaurantsForm";

class Admin extends React.Component {
  state = {
    restaurants: {}
  };
  

  componentDidMount() {
    this.ref = base.syncState(`${this.props.match.params.path}/restaurants`, {
      context: this,
      state: "restaurants"
    });
  };


  updateRestaurant=(key, updatedRestaurant)=>{
    const restaurants={...this.state.restaurants};
    restaurants[key]=updatedRestaurant;
    this.setState({restaurants})
  };


  removeRestaurant= (key)=>{
    const restaurants ={...this.state.restaurants}
    restaurants[key]=null;
    this.setState({restaurants})
  }

  render() {
    return (
      <div className="root">
       <a href="/" className="btn btn-primary">go to site</a>
        <ul
          style={{
            display: "flex", 
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {Object.keys(this.state.restaurants).map(key => (
            <Cards key={key} details={this.state.restaurants[key]} />
          ))}
        </ul>

        {Object.keys(this.state.restaurants).map(key => (
            <EditRestaurantsForm
              key={key}
              index={key}
              removeRestaurant={this.removeRestaurant}
              restaurant={this.state.restaurants[key]}
              updateRestaurant={this.updateRestaurant}
            />
          ))}
        
      </div>
    );
  }
}

export default Admin;
