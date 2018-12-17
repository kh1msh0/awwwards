import React from "react";

class Cards extends React.Component {

  addLike = () => {
const updatedLike = {...this.props.details};
  //  [event.currentTarget.like]: event.currentTarget.value
  updatedLike.like=updatedLike.like + parseFloat(1);
  // console.log(updatedLike)
   this.props.updateLike(this.props.index, updatedLike)
  };
  saveValues = () => {
		if (localStorage._like === undefined) {
      localStorage._like = Date.now();
      this.addLike()
      // console.log(localStorage._like)

		}
		else if(Date.now()-localStorage._like  >= 10*1000){
      localStorage._like = Date.now();
      this.addLike()
         console.log("this is more then 10 sec")
		}
		else{
			alert("თქვენ შეგიძლიათ მოიწონოთ რესტორანი 24 საათში ერთხელ!")
		}
     };

     
  
  render() {
    const { saxeli, mplobeli, desc, image, kategoria,like } = this.props.details;
    const percent= 100*like/this.props.allLikes;

    return (
      <li className="card cardsize" style={{ width: "318px" }}>
        <p className="card-text">{kategoria}</p>
        <img className="card-img-top" src={image} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{saxeli}</h5>
          <h6 className="card-text">{mplobeli}</h6>
          <p className="card-text">{desc}</p>
          {/* <div>like:{parseFloat(like)}</div> */}
          <div>all likes:{ Number.parseFloat(percent).toFixed(1)} %</div>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
          <button onClick={this.saveValues} className="btn btna btn-primary" >
            like me
          </button>
        </div>
      </li>
    );
  }
}

export default Cards;
