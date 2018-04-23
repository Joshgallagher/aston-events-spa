import eventIndex from './routes/eventIndex'
import eventCategory from './routes/eventCategory'
import eventShow from './routes/eventShow'

export default [
  ...eventIndex,
  ...eventCategory,
  ...eventShow
]
