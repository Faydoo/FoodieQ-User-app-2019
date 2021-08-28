import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import ReduxThunk from 'redux-thunk';

import FoodieqNavigator from './navigation/FoodieqNavigator';
import bookingReducer from './store/reducers/bookings';
import vendorsReducer from './store/reducers/vendors';

enableScreens();

const rootReducer = combineReducers({
  vendors: vendorsReducer,
  bookings: bookingReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-semi-bold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
    );
  }

  return (
    <Provider store={store}>
      <FoodieqNavigator />
    </Provider>
  );
}