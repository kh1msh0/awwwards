import React from "react";

class Form extends React.Component {
    saxeliRef = React.createRef();
    mplobeliRef = React.createRef();
    descRef = React.createRef();
    imageRef=React.createRef();
    kategoriaRef=React.createRef();
  
    createRestaurant = event => {
      event.preventDefault();
      const restaurant = {
        saxeli: this.saxeliRef.current.value,
        mplobeli: this.mplobeliRef.current.value,
        desc: this.descRef.current.value,
        image: this.imageRef.current.value,
        kategoria: this.kategoriaRef.current.value,
        like: parseFloat(0)
      };
      this.props.addRestaurants(restaurant);
      event.currentTarget.reset();
    };
  
  render() {
    return (
      <form className="pb-5" onSubmit={this.createRestaurant}>
        <div className="form-group">
          <label >რესტორნის სახელი</label>
          <input
            type="text"
            name="saxeli"
            ref={this.saxeliRef}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="რესტორანი "
          />
        </div>
        <div className="form-group">
          <label >რესტორნის მფლობელი</label>
          <input
            type="text"
            name="mplobeli"
            ref={this.mplobeliRef}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="მფლობელი "
          />
        </div>

        <div className="form-group">
          <label >suratis linki am etapze :D</label>
          <input
            type="text"
            name="image"
            ref={this.imageRef}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="ჩააგდეთ ლინკი "
          />
        </div>

        <div className="form-group">
          <label >კატეგორია</label>
          <select className="form-control" name="kategoria" ref={this.kategoriaRef} >
            <option value="რესტორანი">რესტორანი</option>
            <option value="ბარი">ბარი</option>
            <option value="კაფე">კაფე</option>
            <option value="ლაუნჯი">ლაუნჯი</option>
            <option value="პაბი">პაბი</option>
            <option value="კლუბი">კლუბი</option>
          </select>
        </div>
       
        <div className="form-group">
          <label >აღწერა</label>
          <textarea
            type="text"
            name="desc"
            ref={this.descRef}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="თქვი რამე "
          />
        </div>
        <p></p>
        <button type="submit" className="btn btn-outline-primary">submit</button>
        {/* <div>{this.props.counter}</div> */}
      </form>
    );
  }
}

export default Form;
