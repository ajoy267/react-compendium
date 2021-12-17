import React from 'react';
import { TextField, Button, Select, MenuItem } from '@mui/material';

export default function Control({ query, setQuery, setLoading, order, setOrder }) {
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
        <Select value={order} onChange={(e) => setOrder(e.target.value)}>
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
        <Button variant="outlined" className="button" onClick={() => setLoading(true)}>
          Search
        </Button>
      </div>
    </div>
  );
}
