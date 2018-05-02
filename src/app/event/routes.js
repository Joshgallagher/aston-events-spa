import eventIndex from './routes/eventIndex'
import eventCategory from './routes/eventCategory'
import eventShow from './routes/eventShow'
import eventCreate from './routes/eventCreate'
import eventCreateMedia from './routes/eventCreateMedia'
import eventUpdate from './routes/eventUpdate'
import eventSearch from './routes/eventSearch'

export default [
  ...eventSearch,
  ...eventIndex,
  ...eventCategory,
  ...eventCreate,
  ...eventCreateMedia,
  ...eventShow,
  ...eventUpdate
]
