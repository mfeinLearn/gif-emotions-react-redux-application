import React from 'react';
import GifCard from './GifCard'

const GifList = props => {
  // console.log(props.gif[0])
  const gifs = props.gif.map((gif) => {
    return <GifCard key={gif.id} gif={gif} />
  });

  return gifs;
};

export default GifList;
