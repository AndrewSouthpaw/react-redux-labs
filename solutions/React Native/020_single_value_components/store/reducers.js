import { createHandlers } from 'redux-handlers'

const { registerHandler, createReducer } = createHandlers()

const addFilm = (film, state) => (
  { ...state, films: state.films.find(({ id }) => id === film.id) ? state.films : [...state.films, film] }
)
registerHandler('ADD_FILM', addFilm)

const initialState = {
  films: [],
  selected_date: new Date(),
  selected_film: {},
  show_film_details: false,
  showings: [],
  tables: [],
}

export const reducer = createReducer(initialState)
