import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(response.data);
    };
    fetchData();
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{pokemon.name.toUpperCase()}</Typography>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <Typography variant="body1">Type: {pokemon.types.map(t => t.type.name).join(', ')}</Typography>
        <Typography variant="body1">Height: {pokemon.height}</Typography>
        <Typography variant="body1">Weight: {pokemon.weight}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonDetail;
