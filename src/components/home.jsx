import React, { useState, useEffect } from 'react'

// Configs
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Components
import HeroImage from './heroImage'
import Grid from './Grid'
import Thumb from './Thumbs/thumbs'

// Hooks
import { useHomeFetch } from '../Hooks/useHomeFetch'

// Image
import noImage from '../images/no_image.jpg'

function Home () {
  const { state, loading, error } = useHomeFetch()
  console.log(state)

  return (
    <React.Fragment>
      {state.results[0]
        ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
          )
        : null}

      <Grid header="Popular Movies">
        {state.results.map((movie, i) => (
          <Thumb
           key={i}
           clickable
           image = {movie.poster_path
             ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
             : noImage}
          />
        ))}
      </Grid>
    </React.Fragment>
  )
}

export default Home
