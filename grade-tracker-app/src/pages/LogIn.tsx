import { IonContent, IonButton, IonHeader,IonItem, IonInput,IonList, IonPage, IonTitle, IonToolbar, IonLoading } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { logUser } from '../firebaseConfig'; 
import { toast } from '../components/toast'; 
import { setUserState } from '../redux/actions'
import { useDispatch } from 'react-redux'


const LogIn: React.FC = () => {

  const [busy, setBusy] = useState<boolean>(false)
  const dispatch = useDispatch()  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  async function loginUser(){
    setBusy(true)
   const res:any = await logUser(email, password)
   if(res){
        dispatch(setUserState(res.user.email))
        history.replace('/CourseMgmtPage')
        toast('Logged in!')
   }
   else {
    toast('email and password combination is not a match')
    }
    setBusy(false)
}
  
    return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Be patient.." duration={0} isOpen={busy}/>
      <IonContent>

        <IonList>
          <IonItem>
            <IonInput 
            onIonChange={(e: any) => setEmail(e.target.value)}
            placeholder="Email"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput 
            onIonChange={(e: any) => setPassword(e.target.value)}
            type="password" placeholder="Password"></IonInput>
          </IonItem>
        </IonList>
        <IonButton onClick={loginUser}>Log In </IonButton>
        <p>
            Don't have an account? click <Link to="./Register"> here </Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;