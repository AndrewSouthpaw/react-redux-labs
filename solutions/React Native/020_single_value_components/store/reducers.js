import { createHandlers } from 'redux-handlers'

const { registerHandler, createReducer } = createHandlers()

const addFilm = (film, state) => (
  { ...state, films: state.films.find(({ id }) => id === film.id) ? state.films : [...state.films, film] }
)
registerHandler('ADD_FILM', addFilm)

const setSelectedDate = (selectedDate, state) => ({ ...state, selectedDate })
registerHandler('SET_SELECTED_DATE', setSelectedDate)

const initialState = {
  films: [],
  selectedDate: new Date(),
  selectedFilm: {},
  showFilmDetails: false,
  showings: [],
  tables: [],
}

export const reducer = createReducer(initialState)
