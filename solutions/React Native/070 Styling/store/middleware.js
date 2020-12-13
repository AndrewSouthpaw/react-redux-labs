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

const fetchTablesAndSeatsMiddleware = ({ dispatch }) => next => async (action) => {
  const { type, theaterId } = action
  if (type === 'FETCH_TABLES_AND_SEATS') {
    try {
      const { data: tables } = await axios.get(`${host}/api/theaters/${theaterId}/tables`)
      dispatch({ type: 'SET_TABLES', tables })
    } catch (e) {
      console.error('Could not fetch tables', e)
    }
  }

  return next(action)
}

const fetchShowingsForDateMiddleware = ({ dispatch }) => next => async (action) => {
  const { type, filmId, selectedDate } = action
  if (type === 'FETCH_SHOWINGS') {
    try {
      const { data: showings } = await axios.get(`${host}/api/showings/${filmId}/${selectedDate}`)
      dispatch({ type: 'SET_SHOWINGS', showings })
    } catch (e) {
      console.error('Could not fetch showings', e)
    }
  }

  return next(action)
}

const fetchReservationsMiddleware = ({ dispatch }) => next => async (action) => {
  const { showingId, type } = action
  if (type === 'FETCH_RESERVATIONS') {
    try {
      const { data: tables } = await axios.get(`${host}/api/showings/${showingId}/reservations`)
      dispatch({ type: 'SET_RESERVATIONS', reservations })
    } catch (e) {
      console.error('Could not fetch tables', e)
    }
  }

  return next(action)
}

export default [
  fetchFilmsMiddleware, fetchTablesAndSeatsMiddleware, fetchShowingsForDateMiddleware, fetchReservationsMiddleware,
]
