import { IonContent, IonButton, IonHeader,IonMenuButton,IonMenu,IonIcon, IonItem, IonInput, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent } from '@ionic/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { logoutUser } from '../firebaseConfig'
import {useHistory} from 'react-router';

const CourseMgmtPage: React.FC = () => {

  const username = useSelector((state:any) => state.user.username)
  const [course, setCourse] = useState(''); 
  const history = useHistory()

  //let element: HTMLElement = document.getElementsByClassName('btn')[0] as HTMLElement;
  //element.click();

  async  function logout(){
    await logoutUser()
     history.replace('./')
  }
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Testing Course Management
            <IonButton onClick={logout} class="ion-float-right">Logout</IonButton>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>hello {username} </p>
        <IonCard>
          <IonCardContent> 
            <IonTitle>Enter your current course:</IonTitle>
            <IonInput 
              placeholder="Enter Course" 
              value={course}
              onIonChange={(e: any) => setCourse(e.target.value)}
            />
            <IonButton rel="">Enter</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CourseMgmtPage;