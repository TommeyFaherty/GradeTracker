import * as firebase from 'firebase'
import {toast} from './components/toast'; 

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

var database = firebase.database();

export function getCurrentUser(){
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
            if (user){
                resolve(user)
            } else {
                resolve(null)
            }
            unsubscribe()
         })
    })
}
export async function logUser(email:string, password:string) {
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email,password)
    
        console.log(res)
        return res
    } catch(error){
        console.log(error)
        return false
    }
}

export function logoutUser(){
    return firebase.auth().signOut()
}

export async function registerUser(email:string, password:string){
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log(res)
        return true
    } catch(error){
        toast(error.message)
        return false
    }
}