import { IonContent, IonButton,IonLoading, IonHeader,IonItem, IonInput,IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { toast } from '../components/toast'; 
import {registerUser} from '../firebaseConfig'; 

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')    
    const [password, setPassword] = useState('')
    const [cpassword, setcPassword] = useState('')
    const [busy, setBusy] = useState<boolean>(false)
  async function regUser(){
      //validation 
      setBusy(true)
      if (password !== cpassword){

          return toast('Passwords do not match ')
      }
        if(email.trim() === ''|| password.trim()===''){
            return toast('Please enter email and password')
        }
        //*NOTE MAY NEED TO CHANGE THIS LATER TO ADD USERNAME*
        const res = await registerUser(email,password)
        if(res){
            return toast('You have registered!')
        }
        setBusy(false)
    }
    
      return (
  
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>

        <IonLoading message="Trying to register you!"  duration={0} isOpen={busy}/>

          <IonList>
            <IonItem>
                <IonInput 
              onIonChange={(e: any) => setUsername(e.target.value)}
              placeholder="Username">
                </IonInput>
            </IonItem>
            <IonItem>
                <IonInput 
              onIonChange={(e: any) => setEmail(e.target.value)}
              placeholder="Email address" type="email">
                </IonInput>
            </IonItem>
            <IonItem>
              <IonInput 
              onIonChange={(e: any) => setPassword(e.target.value)}
              type="password" placeholder="Password">
              </IonInput>
            </IonItem>
            <IonItem>
              <IonInput 
              onIonChange={(e: any) => setcPassword(e.target.value)}
              type="password" placeholder="Confirm Password">
              </IonInput>
            </IonItem>
          </IonList>
          <IonButton onClick={regUser}>Register!</IonButton>

          <p>
            Already have an account? click <Link to="./LogIn"> here </Link> to log in!
        </p>
        </IonContent>
      </IonPage>
    );
  };

export default Register;