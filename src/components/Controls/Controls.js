import React from 'react';

export default function Control({ query, setQuery, setLoading }) {
  return (
    <div>
      <div className="control">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
        <button className="button" onClick={() => setLoading(true)}>
          Search
        </button>
      </div>
    </div>
  );
}
