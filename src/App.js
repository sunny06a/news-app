// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import{
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<News key="general" pagesize="5" country="in" category="general"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/business' element={<News key="business"pagesize="5" country="in" category="business"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/sports' element={<News key="sports" pagesize="5" country="in" category="sports"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/technology' element={<News key="technology" pagesize="5" country="in" category="technology"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/enterainment' element={<News key="entertainment" pagesize="5" country="in" category="entertainment"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/science' element={<News key="science" pagesize="5" country="in" category="science"></News>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/health' element={<News key="health" pagesize="5" country="in" category="health"></News>}></Route>
      </Routes>

      </BrowserRouter>
        
      </div>
    )
  }
}
