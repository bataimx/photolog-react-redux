import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from '../middlewares/loggerMiddleware';
import rootSaga from '../middlewares/saga';
import { rootReducer } from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
