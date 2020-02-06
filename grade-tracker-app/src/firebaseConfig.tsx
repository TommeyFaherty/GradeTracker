import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDMADOeA2pJhub886aa96wDgXn1gGpFJ8o",
    authDomain: "gradetracker-6f72c.firebaseapp.com",
    databaseURL: "https://gradetracker-6f72c.firebaseio.com",
    projectId: "gradetracker-6f72c",
    storageBucket: "gradetracker-6f72c.appspot.com",
    messagingSenderId: "114427874629",
    appId: "1:114427874629:web:eccea7b695c65a3407022c",
}

firebase.initializeApp(config)

export async function logUser(email:string, password:string) {
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email,password)
    
        console.log(res)
        return true
    } catch(error){
        console.log(error)
        return false
    }
}