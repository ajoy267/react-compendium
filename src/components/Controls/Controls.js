import React from 'react';
import { TextField, Button } from '@mui/material';

export default function Control({ query, setQuery, setLoading }) {
  return (
    <div>
      <div className="control">
        <TextField
          type="text"
          variant="outlined"
          label="Search Pokemon"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Button variant="outlined" className="button" onClick={() => setLoading(true)}>
          Search
        </Button>
      </div>
    </div>
  );
}
