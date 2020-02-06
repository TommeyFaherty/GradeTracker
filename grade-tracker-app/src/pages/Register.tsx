import { IonContent, IonButton, IonHeader,IonItem, IonInput,IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')    
    const [password, setPassword] = useState('')
    const [cpassword, setcPassword] = useState('')
    
  function regUser(){
      console.log(username, password, email)
  }
    
      return (
  
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
  
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