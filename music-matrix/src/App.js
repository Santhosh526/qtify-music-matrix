import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Section from './Components/Section';
import FilterSection from './Components/FilterSection';

import { useEffect, useState } from 'react';
import axios from 'axios';

const ENDPOINT = 'https://qtify-backend-labs.crio.do';
function App() {

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}/albums/top`).then(
      ({data}) => {
        setTopAlbums(data)
      })
    axios.get(`${ENDPOINT}/albums/new`).then(
      (res) => {
        setNewAlbums(res.data)
      })
    axios.get(`${ENDPOINT}/songs`).then(
      (res) => {
        setSongs(res.data)
        setFilteredSongs(res.data)
      })
    axios.get(`${ENDPOINT}/genres`).then(
     (res) => {
      setGenres([{"key":"all","label":"All"},...res.data.data])
      })
  }, [])

  return (
    <>
      <Navbar />
      <HeroSection />
      <Section navId='ta' title='Top Albums' data={topAlbums}/>
      <Section navId='na' title='New Albums' data={newAlbums}/>
      <FilterSection  title='Songs' data={filteredSongs} filters={genres} 
        executeFilter={(genre) =>{
          if(genre === "all"){
            setFilteredSongs(songs)
          }
          else{
            setFilteredSongs(songs.filter(song => song.genre.key === genre))
          }
        }}
      />
    </>
  );
}

export default App;
