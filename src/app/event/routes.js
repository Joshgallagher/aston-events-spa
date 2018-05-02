import eventIndex from './routes/eventIndex'
import eventCategory from './routes/eventCategory'
import eventShow from './routes/eventShow'
import eventCreate from './routes/eventCreate'
import eventCreateMedia from './routes/eventCreateMedia'
import eventUpdate from './routes/eventUpdate'

export default [
  ...eventIndex,
  ...eventCategory,
  ...eventCreate,
  ...eventCreateMedia,
  ...eventShow,
  ...eventUpdate
]
