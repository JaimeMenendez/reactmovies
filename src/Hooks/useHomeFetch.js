import { useState, useEffect, useRef } from 'react'
import API from '../API'

const initialState = {
  page: 0,
  results: [],
  total_page: 0,
  total_results: 0
}


export const useHomeFetch = () => {

  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false)
      setLoading(true)

      const movies = await API.fetchMovies(searchTerm, page)

      setState(prev => {
        return {
          ...movies,
          results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
        }
      })
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMovies(1) // Fetching First Page
  }, [])

  return { state, loading, error }
}
