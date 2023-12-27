import { useState } from 'react'
import './App.css'
import Row from "./components/Row";
import requests from './requests';
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {

  return (
    <div className="app">
    <Nav />
    <Banner />
      <Row title="NETFLIX ORIGINALS" url={requests.netfliOriginals} vertical={true}/>
      <Row title="Trending Now" url={requests.trending}/>
      <Row title="Top Rated"  url={requests.topRated}/>
      <Row title="Action"  url={requests.action}/>
      <Row title="Comedy"  url={requests.comedy}/>
      <Row title="Romance" url={requests.romantic}/>
      <Row title="Documentaries"  url={requests.documentaries}/>
    </div>
  )
}

export default App
/**/
