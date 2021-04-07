import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import { bannerReducer} from './home/reducers'
import { userReducer} from './users/reducers'
import { recetasReducer} from './recetas/reducers'
import { categoriesReducer} from './categories/reducers'

const rootReducer = combineReducers({
  banner: bannerReducer,
  userStore: userReducer,
  recetasStore: recetasReducer,
  categoriesStore:categoriesReducer,
});

const Store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

export default Store;
