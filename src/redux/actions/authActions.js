import firebase from '../../firebase/config'

export function emailRegister(email, password) {
    return async (dispatch) => {
        try {
            const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            dispatch({type: 'LOGGED_IN', payload: user})
        } catch (error) {
            dispatch(registerError(error.message))
        }
    }
}

export function emailLogin(email, password) {
    return async (dispatch) =>{
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch({type: 'LOGGED_IN', payload: user})
        } catch (error) {
            dispatch(loginError(error.message))
        }
    }
}
export function logout(){
    return async (dispatch)=>{
        try {
            const user = await firebase.auth().signOut()
            dispatch({type:'LOGGED_OUT'})
        } catch (error) {
            
        }
    }
}

export function registerError(error){
    return{
        type: 'REGISTER_ERROR',
        payload: error
    }
}
export function loginError(error){
    return{
        type: 'LOGIN_ERROR',
        payload: error
    }
}
