import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      setPokemon(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      {pokemon.map((p, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <Link to={`/pokemon/${index + 1}`}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.name.toUpperCase()}</Typography>
                <img src={`https://pokeapi.co/media/sprites/pokemon/${index + 1}.png`} alt={p.name} />
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonList;
