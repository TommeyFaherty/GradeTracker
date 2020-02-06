import { IonContent, IonButton, IonHeader,IonItem, IonInput,IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const LogIn: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
function logUser(){
    console.log(username, password)
}
  
    return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList>
          <IonItem>
            <IonInput 
            onIonChange={(e: any) => setUsername(e.target.value)}
            placeholder="Username"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput 
            onIonChange={(e: any) => setPassword(e.target.value)}
            type="password" placeholder="Password"></IonInput>
          </IonItem>
        </IonList>
        <IonButton onClick={logUser}>Log In </IonButton>
        <p>
            Don't have an account? click <Link to="./Register"> here </Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;