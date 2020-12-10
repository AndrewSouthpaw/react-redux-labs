import axios from 'axios'
import { host } from '../api'

const fetchFilmsMiddleware = ({ dispatch }) => next => async (action) => {
  if (action.type === 'FETCH_FILMS') {
    try {
      const { data: films } = await axios.get(`${host}/api/films`)
      films.forEach(film => dispatch({ type: 'ADD_FILM', film }))
    } catch (e) {
      console.error('Could not fetch films', e)
    }
  }

  return next(action)
}

export default [fetchFilmsMiddleware]
