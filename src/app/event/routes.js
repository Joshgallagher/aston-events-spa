import eventIndex from './routes/eventIndex'
import eventCategory from './routes/eventCategory'
import eventShow from './routes/eventShow'
import eventCreateStart from './routes/eventCreateStart'
import eventCreateFinish from './routes/eventCreateFinish'

export default [
  ...eventIndex,
  ...eventCategory,
  ...eventShow,
  ...eventCreateStart,
  ...eventCreateFinish
]
