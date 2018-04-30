import eventIndex from './routes/eventIndex'
import eventCategory from './routes/eventCategory'
import eventShow from './routes/eventShow'
import eventCreate from './routes/eventCreate'
import eventCreateMedia from './routes/eventCreateMedia'

export default [
  ...eventIndex,
  ...eventCategory,
  ...eventShow,
  ...eventCreate,
  ...eventCreateMedia
]
