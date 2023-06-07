import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Daily News - Top headline</h2>
        <div className='row my-5'>
            <div className='col-md-4'>
            <Newsitem title="news1" description="desc1" imageurl="https://bsmedia.business-standard.com/_media/bs/img/article/2023-05/28/full/1685288453-262.jpg"></Newsitem>
            </div>
            <div className='col-md-4'>
            <Newsitem title="news2" description="desc2"></Newsitem>
            </div>
            <div className='col-md-4'>
            <Newsitem title="news1" description="desc1"></Newsitem>
            </div>
        </div>
        <div className='row my-5'>
            <div className='col-md-4'>
            <Newsitem title="news1" description="desc1"></Newsitem>
            </div>
            <div className='col-md-4'>
            <Newsitem title="news2" description="desc2"></Newsitem>
            </div>
            <div className='col-md-4'>
            <Newsitem title="news1" description="desc1"></Newsitem>
            </div>
        </div>
      </div>
    )
  }
}

export default News