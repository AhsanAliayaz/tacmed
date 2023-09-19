import { View, Text } from 'react-native'
import React from 'react'
import StackNav from './Project/Navigations/StackNav'
import { Colors } from './Project/Constants/Colors'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store,{persistor} from './Project/Redux/Store/Store';


export default function App() {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
     <StackNav />
     </PersistGate>
    </Provider>
     
     )
}