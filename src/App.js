import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setquery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      console.log(data);
      setPokemon(data.results);
    };
    fetchData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
