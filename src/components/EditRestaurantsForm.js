import React from "react";

class EditRestaurantsForm extends React.Component {
    handleChange = event => {
        // update this fish
        // 1. take a copy of the current fish
        const updatedRestaurant = {
          ...this.props.restaurant,
           [event.currentTarget.name]: event.currentTarget.value}
           this.props.updateRestaurant(this.props.index, updatedRestaurant)
        //   console.log(updatedRestaurant)
    };
  render() {


    return (
      <div style={{ height: "200px", width:"1000px" }}>
        <input type="text"  
        name="saxeli"  
        onChange={this.handleChange} 
        value={this.props.restaurant.saxeli} 
        /> 
        <input
          type="text" 
          name="mplobeli" 
          onChange={this.handleChange} 
          value={this.props.restaurant.mplobeli} 
        />
        <select name="kategoria" onChange={this.handleChange} value={this.props.restaurant.kategoria}  >
            <option value="რესტორანი">რესტორანი</option>
            <option value="ბარი">ბარი</option>
            <option value="კაფე">კაფე</option>
            <option value="ლაუნჯი">ლაუნჯი</option>
            <option value="პაბი">პაბი</option>
            <option value="კლუბი">კლუბი</option>
          </select>
        <input
          type="text" 
          style={{ width: "200px" }} 
          name="desc" 
          onChange={this.handleChange} 
          value={this.props.restaurant.desc} 
        />
        <input type="text"   
        name="image"  
        onChange={this.handleChange}  
        value={this.props.restaurant.image}  
        />

        <button onClick={()=>this.props.removeRestaurant(this.props.index)}>remove me </button>
      </div>
    );
  }
}

export default EditRestaurantsForm;
