import { createHandlers } from 'redux-handlers'

const { registerHandler, createReducer } = createHandlers()

const addFilm = (film, state) => (
  { ...state, films: state.films.find(({ id }) => id === film.id) ? state.films : [...state.films, film] }
)
registerHandler('ADD_FILM', addFilm)

const setSelectedDate = (selectedDate, state) => ({ ...state, selectedDate })
registerHandler('SET_SELECTED_DATE', setSelectedDate)

const setSelectedFilm = (selectedFilm, state) => ({ ...state, selectedFilm })
registerHandler('SET_SELECTED_FILM', setSelectedFilm)

const showFilmDetails = (state) => ({ ...state, showFilmDetails: true })
registerHandler('SHOW_FILM_DETAILS', showFilmDetails)

const hideFilmDetails = (state) => ({ ...state, showFilmDetails: false })
registerHandler('HIDE_FILM_DETAILS', hideFilmDetails)

const initialState = {
  films: [],
  selectedDate: new Date(),
  selectedFilm: {},
  showFilmDetails: false,
  showings: [],
  tables: [],
}

export const reducer = createReducer(initialState)
