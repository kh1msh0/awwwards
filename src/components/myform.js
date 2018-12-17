import React from "react";


class Myform extends React.Component {
  saxeliRef = React.createRef();
  mplobeliRef = React.createRef();
  descRef = React.createRef();
  imageRef=React.createRef();

  createRestaurant = event => {
    event.preventDefault();
    const restaurant = {
      saxeli: this.saxeliRef.current.value,
      mplobeli: this.mplobeliRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addRestaurants(restaurant);
    event.currentTarget.reset();
  };

  // goToStore = event => {
  //     // 1.stop the form from submitting
  //     // event.preventDefault();
  //     // 2.get the text from input
  //     const storeName = "restaurants"
  //     // 3.change the page to/tore/whatever-they-entered
  //     this.props.history.push(`/store/${storeName}`);
  //   };
  Like = () => {
    // const lik =1;
    // console.log(lik +);
  };

  render() {
    return (
      <form
        style={{ marginTop: "50px", marginBottom: "50px", marginLeft: "30%" }}
        onSubmit={this.createRestaurant}
      >
        

        <input
          type="text"
          name="saxeli"
          ref={this.saxeliRef}
          placeholder="restornis saxeli"
        />

        <input
          type="text"
          name="mplobeli"
          ref={this.mplobeliRef}
          placeholder="mplobeli"
        />

        <input
          type="text"
          name="descripion"
          ref={this.descRef}
          placeholder="lijbi rame chawere"
        />

        <input
          type="text"
          name="image"
          ref={this.imageRef}
          placeholder="Image"
        />

        <button type="submit">submit</button>
        <button onClick={this.Like}> Like</button>

        {/* <Input type="file" name="file" id="exampleFile" /> */}
      </form>
    );
  }
}

export default Myform;
