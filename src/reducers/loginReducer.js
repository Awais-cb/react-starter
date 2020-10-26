const initState = {
    isLoggedIn : false
}
const loginReducer = (state = initState, action) => {
    console.log(action);
    return state
}

export default loginReducer;