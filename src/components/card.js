import React, { Component } from "react";
import edit from "../assets/ico/edit.svg";
import del from "../assets/ico/delete.svg";
import eye from "../assets/ico/eye.svg";
import heart from "../assets/ico/heart.svg";
import star from "../assets/ico/star.svg";

class Card extends Component {
    render() {
      return (
        <div>
          <div className="ct-card">
            <div className="ct-card-img">
              <img
                className="img-card"
                src={require(`../assets/img/${this.props.imgURL}.jpg`).default}
                alt={this.props}
              ></img>
            </div>
            <div className="ct-card-info">
              <div className="ct-icons">
                <div className="ct-icons-like">
                  <button className="bt-ico">
                    <img className="img-ico" src={star} alt="like button" />
                  </button>
                  <button className="bt-ico">
                    <img className="img-ico" src={heart} alt="love button" />
                  </button>
                  <button className="bt-ico">
                    <img className="img-ico" src={eye} alt="see button" />
                  </button>
                </div>
                <div className="ct-icons-modify">
                  <button className="bt-ico">
                    <img className="img-ico" src={edit} alt="edit button" />
                  </button>
                  <button className="bt-ico">
                    <img className="img-ico" src={del} alt="delete button" />
                  </button>
                </div>
              </div>
              <div className="ct-txt">
                <h6 className="txt-card-title">{this.props.imgName}</h6>
                <p className="txt-card-user">{this.props.imgUser}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Card;