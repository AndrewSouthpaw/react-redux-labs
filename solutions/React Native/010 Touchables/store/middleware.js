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
  next(action)

  const { type, theaterId } = action
  if (type === 'FETCH_TABLES_AND_SEATS') {
    try {
      const { data: tables } = await axios.get(`${host}/api/theaters/${theaterId}/tables`)
      dispatch({ type: 'SET_TABLES', tables })
    } catch (e) {
      console.error('Could not fetch tables', e)
    }
  }
}

const fetchShowingsForDateMiddleware = ({ dispatch, getState }) => next => async (action) => {
  // in this case, we want the reducer to respond to and update state *before* running our network calls
  next(action)
  if (action.type === 'SET_SELECTED_DATE' || action.type === 'SET_SELECTED_FILM') {
    try {
      // because of the next(action) invocation happening already, we can trust these values will be updated to whatever
      // was set by the action.
      const selectedDate = getState().selectedDate.toISOString().split('T')[0]
      const filmId = getState().selectedFilm.id
      const { data: showings } = await axios.get(`${host}/api/showings/${filmId}/${selectedDate}`)
      dispatch({ type: 'SET_SHOWINGS', showings })
    } catch (e) {
      console.error('Could not fetch showings', e)
    }
  }
}

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

const fetchReservationsMiddleware = ({ dispatch }) => next => async (action) => {
  const { showingId, type } = action
  if (type === 'FETCH_RESERVATIONS') {
    try {
      const { data: reservations } = await axios.get(`${host}/api/showings/${showingId}/reservations`)
      dispatch({ type: 'SET_RESERVATIONS', reservations })
    } catch (e) {
      console.error('Could not fetch tables', e)
    }
  }

  // console.log('next!')
  return next(action)
}

export default [
  fetchFilmsMiddleware, fetchTablesAndSeatsMiddleware, fetchShowingsForDateMiddleware, fetchReservationsMiddleware,
]
