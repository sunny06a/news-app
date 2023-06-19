import React from "react";

const Newsitem =(props)=> {
    let { title, description,imageurl,url,date,author} = props;
    return (
      <div>
        <div className="card my-2 text-white" style={{ width: "18rem", height:"30rem", background:"rgb(33,37,41)"}}>
          <img src={imageurl?imageurl:'https://th.bing.com/th/id/OIP.F9ifbg-Y9-8m5shlCJQXVgHaEL?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} className="card-img-top" alt="..." />
          <div className="card-body">
            <span class="badge text-bg-danger">{author?author:"unkown"}</span>
            <h5 className="card-title">{title?title.slice(0,90):".."}...</h5>
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


export default Newsitem;
