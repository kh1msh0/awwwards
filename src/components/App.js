import React from "react";
import Cards from "./Cards";
// import Myform from "./myform";
import "../App.css";
import base from "../base";
import Form from "./Form";
import Header from "./Header";
// import EditRestaurantsForm from "./EditRestaurantsForm";

class App extends React.Component {
  state = {
    restaurants: {},
    allLikes: {}
  };





  componentDidMount() {
    this.ref = base.syncState(`${this.props.match.params.path}/restaurants`, {
      context: this,
      state: "restaurants"
    });
  }

  addRestaurants = Restaurant => {
    const restaurants = { ...this.state.restaurants };

    restaurants[`restaurant${Date.now()}`] = Restaurant;

    this.setState({ restaurants });
  };

  // updateRestaurant=(key, updatedRestaurant)=>{
  //   const restaurants={...this.state.restaurants};
  //   restaurants[key]=updatedRestaurant;
  //   this.setState({restaurants})
  // };

  counter() {
    // const allLikes={...this.state.allLikes}
    const restaurantKeys = Object.keys(this.state.restaurants).map(
      key => this.state.restaurants[key].like
    );
    // const restaurantKeys=
    const reducer = (acumulator, currentValue) => acumulator + currentValue;
    const allLikes = restaurantKeys.reduce(reducer);
    // console.log(allLikes);
    // document.getElementById("demo").innerHTML=  allLikes;
    // this.showlikes(allLikes);
    // this.setState({allLikes : allLike})
    return allLikes;
  };

  updateLike = (key, updatedLike) => {
    const restaurants = { ...this.state.restaurants };
    restaurants[key] = updatedLike;
    this.setState({ restaurants });
  };
  remove=()=>{
    localStorage.removeItem("_like");
  };

  countLeftedTime = ()=>{
    const passTime = Date.now()-localStorage._like
    const leftTime = 24*60*60*1000-passTime
    const time = leftTime/1000/60/60
    console.log(time.toFixed(2))
    return time.toFixed(2)
   };
   


  render() {
    let allLikes;
    if (Object.keys(this.state.restaurants).length > 0)
      allLikes = this.counter();
    //  console.log('all', allLikes);  
    return (
      <div className="root">
        <Header />
        <button onClick={this.countLeftedTime}>bla bla</button>
        <button onClick={this.remove}>remove</button>
        <div className="justify-content-end" style={{ display: "flex" }}>
          <a href="admin" className="btn btn-primary">
            Go to admin
          </a>
        </div>
        <div className="mtavari">
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              paddingLeft: "0px"
            }}
          >
            {Object.keys(this.state.restaurants).map(key => (
              <Cards
                allLikes={allLikes}
                key={key}
                index={key}
                details={this.state.restaurants[key]}
                updateLike={this.updateLike}
                saveValues={this.saveValues}
                countLeftedTime={this.countLeftedTime}
                // allLikes={this.counter}
              />
            ))}
          </ul>
          {/* {Object.keys(this.state.restaurants).map(key => (
            <EditRestaurantsForm
              key={key}
              index={key}
              restaurant={this.state.restaurants[key]}
              updateRestaurant={this.updateRestaurant}
            />
          ))} */}

          <Form
            // counter={this.counter}
            addRestaurants={this.addRestaurants}
          />

          {/* <Myform addRestaurants={this.addRestaurants} /> */}
        </div>
      </div>
    );
  }
}

export default App;
