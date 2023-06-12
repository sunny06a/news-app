import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8e2213caa2e64608a6bed08745fa20a8"
    let data =await fetch(url);
    let parsedata=await data.json();
    this.setState({articles:parsedata.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Daily News - Top headline</h2>
        <div className='row my-5'>
            {this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
              <Newsitem url={element.url}title={element.title} description={element.description} imageurl={element.urlToImage}></Newsitem>
              </div>
            })}
        </div>
      </div>
    )
  }
}

export default News