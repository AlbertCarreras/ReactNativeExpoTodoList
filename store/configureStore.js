import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import { reducer } from '../redux/todoRedux'

const middleware = [ thunk ]

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger())
  require('../config/ReactotronConfig')
}

export default () => {
  const store = createStore(
    reducer,
    applyMiddleware(...middleware),
  )
  return store
}

