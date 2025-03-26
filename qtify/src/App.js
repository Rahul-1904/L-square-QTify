import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SongCard from "./components/SongCard/SongCard"
import Section from "./components/Section/Section";
import Songs from "./components/Songs/Songs"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <SongCard albumName={"New Bollywood"} follows={100}/> */}
      <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
      <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
      <Songs/>
    </div>
  );
}

export default App;
