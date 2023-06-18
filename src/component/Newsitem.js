import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description,imageurl,url,date,author} = this.props;
    return (
      <div>
        <div className="card my-2 text-white" style={{ width: "18rem", height:"30rem", background:"rgb(33,37,41)"}}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span class="badge text-bg-danger">{author?author:"unkown"}</span>
            <h5 className="card-title">{title?title:".."}</h5>
            <p className="card-text ">{description?description.slice(0,50):"...."}...</p>
            <p class="card-text "><small class="text-white">Last updated {date}</small></p>
            <a href={url} target="blank" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
