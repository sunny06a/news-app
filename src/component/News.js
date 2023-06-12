import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8e2213caa2e64608a6bed08745fa20a8&page=1&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data =await fetch(url);
    let parsedata=await data.json();
    this.setState({articles:parsedata.articles,totalresult:parsedata.totalresult,loading:false})
  }
  handleprev= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8e2213caa2e64608a6bed08745fa20a8&page=
    ${this.state.page-1}&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data =await fetch(url);
    let parsedata=await data.json();
    this.setState({
      page: this.state.page-1,
      articles:parsedata.articles,
      loading:false
    })
  }
  handlenex= async ()=>{
  //  console.log("handlenex")
   if(!(this.state.page+1> Math.ceil(this.state.totalresult/this.props.pagesize))){
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8e2213caa2e64608a6bed08745fa20a8&page=
    ${this.state.page+1}&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data =await fetch(url);
    let parsedata=await data.json();
    this.setState({
      page: this.state.page+1,
      articles:parsedata.articles,
      loading:false
    })
  }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Daily News - Top headline</h2>
       {this.state.loading && <Spinner></Spinner>}
        <div className='row my-5'>
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
              <Newsitem url={element.url}title={element.title} description={element.description} imageurl={element.urlToImage}></Newsitem>
              </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} onClick={this.handleprev} type="button" className="btn btn-primary">&larr; Previous </button>
        <button disabled={this.state.page+1> Math.ceil(this.state.totalresult/this.props.pagesize)}onClick={this.handlenex} type="button" className="btn btn-primary">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News