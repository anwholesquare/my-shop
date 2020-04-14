import React from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const init = {
    cartItem : [],
    productData : []
};

const reducer = (state = init, action) => {
     switch(action.type){
        case "SET_CART_ITEMS" :
            return {...state, cartItem : action.payload };
        case "SET_DATA" :
                return {...state, productData : action.payload };
        default:
            return state;
     }
};


const persistConfig = {
    key: 'root',
    storage,
    whitelist : ["cartItem"]
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    persistedReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);


const StateProvider = ({children}) => { 
    return <Provider store={store}> <PersistGate loading={null} persistor={persistor}>{children} </PersistGate> </Provider>;
};

export { StateProvider };