import {combineReducers} from 'redux'

const defaultState = {
    user:null,
    counter:0
   
}

function userReducer(prevState= defaultState.user, action){
    switch(action.type){
        case"LOGIN":
            console.log("logging in", action.payload)
            return action.payload
        case"SIGNUP":
            console.log("creating user", action.payload)
            return action.payload
        case "GET_USER":
            console.log("GETTING user", action.payload)
            return action.payload
        case "LOG_OUT":
            console.log("LOG_OUT user", action.payload)
            return action.payload
        case "POST_USER":
            return [...prevState, action.payload]
        case "UPDATE_USER":
            return [...prevState, action.payload]     
        // case "ADD_USER_POSTS":
        //     return {  posts: [prevState.posts,action.payload]}
            // return [{ user: prevState.user, posts: ...prevState.posts, action.payload }]


        default:

            return prevState
                }
}

const rootReducer =  combineReducers({
    user: userReducer
    
   
})

export default rootReducer 