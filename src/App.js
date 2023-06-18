// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
// import bootsrap from '../node_modulesode/b'
import{
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom"

export default class App extends Component {
 pagesize=6;
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<News key="general" pagesize={this.pagesize} country="in" category="general"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/business' element={<News key="businessthis."pagesize={this.pagesize} country="in" category="business"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/sports' element={<News key="sports" pagesize={this.pagesize} country="in" category="sports"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/technology' element={<News key="technology" pagesize={this.pagesize} country="in" category="technology"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/entertainment' element={<News key="entertainment" pagesize={this.pagesize} country="in" category="entertainment"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/science' element={<News key="science" pagesize={this.pagesize} country="in" category="science"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/health' element={<News key="health" pagesize={this.pagesize} country="in" category="health"></News>}></Route>
      </Routes>

      </BrowserRouter>
        
      </div>
    )
  }
}
