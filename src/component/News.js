import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
const News=(props)=> {
  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(true);
  const[page,setPage]=useState(1);
  const[totalResult,setTotalResult]=useState(0);
  const capitalize=(string)=>{
      
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  const updatenews=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pagesize=${props.pagesize}`
    setLoading(true);
    document.title=capitalize(props.category)+' | Daily News'
    let data =await fetch(url);
    let parsedata=await data.json();
    setArticles(parsedata.articles);
    setTotalResult(parsedata.totalResult);
    setLoading(false);
  }
  useEffect(() => {
    updatenews();  
  }, [])
  
  // async componentDidMount(){
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e2213caa2e64608a6bed08745fa20a8&page=1&pagesize=${props.pagesize}`
  //   // setState({loading:true})
  //   // let data =await fetch(url);
  //   // let parsedata=await data.json();
  //   // setState({
  //   //   articles:parsedata.articles,
  //   //   totalresult:parsedata.totalresult,
  //   //   loading:false})
  //   updatenews();
  // }
  const handleprev= async ()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e2213caa2e64608a6bed08745fa20a8&page=
    // ${page-1}&pagesize=${props.pagesize}`
    // setState({loading:true})
    // let data =await fetch(url);
    // let parsedata=await data.json();
    // setState({
    //   page: page-1,
    //   articles:parsedata.articles,
    //   loading:false
    // })
    setPage(page-1)
    updatenews();
  }
  const handlenex= async ()=>{
  // //  console.log("handlenex")
  //  if(!(page+1> Math.ceil(totalresult/props.pagesize))){
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e2213caa2e64608a6bed08745fa20a8&page=
  //   ${page+1}&pagesize=${props.pagesize}`
  //   setState({loading:true})
  //   let data =await fetch(url);
  //   let parsedata=await data.json();
  //   setState({
  //     page: page+1,
  //     articles:parsedata.articles,
  //     loading:false
  //   })
  // }
  setPage(page+1);
  updatenews();
  }
    return (
      <div className='container my-3'>
        <h2 className='text-white text-center'>Top headline</h2>
       {loading && <Spinner></Spinner>}
        <div className='row my-5 justify-content-between'>
            {!loading && articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
              <Newsitem url={element.url} title={element.title} description={element.description} imageurl={element.urlToImage} 
              author={element.author} date={element.publishedAt} source={element.source}></Newsitem>
              </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={page<=1} onClick={handleprev} type="button" className="btn btn-primary">&larr; Previous </button>
        <button disabled={page+1> Math.ceil(totalResult/props.pagesize)}onClick={handlenex} type="button" className="btn btn-primary">Next &rarr;</button>
        </div>
      </div>
    )
  }

News.defaultProps={
  country:'in',
  pagesize: 8,
  category:'general'
}
News.propTypes={ 
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string
}


export default News