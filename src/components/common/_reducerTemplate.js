// Reducer /////////////////////////////////////////////////////////////////////
const INITIAL_STATE = { email: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
}


// index.js ////////////////////////////////////////////////////////////////////
// Template for index.js file within the 'reducers' folder
import { combineReducers } from 'redux'
import Reducer_1 from './Reducer_1'
import Reducer_2 from './Reducer_2'
// etc...

export default combineReducers({
    key1: Reducer_1,
    key2: Reducer_2
})

// The output of the function in Reducer_1 will be assigned to key1 and then
// be available as a property on the 'state' object. We access the 'state' 
// object in our components throught the 'mapStateToProps' function.