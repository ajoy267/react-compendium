import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import PokemonList from './components/PokemonList/PokemonList';
import Control from './components/Controls/Controls';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Control query={query} setQuery={setQuery} setLoading={setLoading} />
          <PokemonList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
