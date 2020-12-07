import axios from 'axios'

const fetchFilmsMiddleware = ({ dispatch }) => next => async (action) => {
  if (action.type === 'FETCH_FILMS') {
    try {
      const { data: films } = await axios.get('http://localhost:3007/api/films')
      films.forEach(film => dispatch({ type: 'ADD_FILM', film }))
    } catch (e) {
      console.error('Could not fetch films')
    }
  }

  return next(action)
}

export default [fetchFilmsMiddleware]
