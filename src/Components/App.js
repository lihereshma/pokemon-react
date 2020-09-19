import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import axios from 'axios';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import PageLoader from './PageLoader';
import Title from './Title';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [currentPageNo, setCurrentPageNo] = useState(1)

  useEffect(() => {
    setLoading(true)
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results)
      setTotal(res.data.count)
    }) 
    return () => cancel();   
  }, [currentPageUrl])

  function gotoNextPage() {
    setCount(count + 1)
    setCurrentPageUrl(nextPageUrl)
    setCurrentPageNo(currentPageNo + 1)
  }

  function gotoPrevPage() {
    setCount(count - 1)
    setCurrentPageUrl(prevPageUrl)
    setCurrentPageNo(currentPageNo - 1)
  }

  if(loading) return <PageLoader />

  return (
    <>
      <header>
        <Title />
      </header>
      <section className="pokemonList">
        <PokemonList pokemon={ pokemon } count={ count } />
      </section> 
      <footer>
        <Pagination 
          gotoNextPage={ nextPageUrl ? gotoNextPage : null }
          gotoPrevPage={ prevPageUrl ? gotoPrevPage : null }
          total={ total }
          currentPageNo= { currentPageNo }
        />
      </footer>     
    </>
  );
}

export default App;
