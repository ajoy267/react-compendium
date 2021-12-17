import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import PokemonList from './components/PokemonList/PokemonList';
import Control from './components/Controls/Controls';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, currentPage);
      setPokemon(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, currentPage]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Control
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        order={order}
        setOrder={setOrder}
      />
      {loading && <span className="loader"></span>}
      {!loading && (
        <PokemonList
          pokemon={pokemon}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}

export default App;
