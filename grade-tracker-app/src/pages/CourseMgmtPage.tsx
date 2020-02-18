import { IonContent, IonButton, IonHeader,IonMenuButton,IonMenu,IonIcon, IonItem, IonInput, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { logoutUser } from '../firebaseConfig'
import {useHistory} from 'react-router';

const CourseMgmtPage: React.FC = () => {

  const username = useSelector((state:any) => state.user.username)
  const history = useHistory()
  async  function logout(){
    await logoutUser()
     history.replace('./')
  }
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Testing Course Management</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

     <p>hello {username} </p>
     <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CourseMgmtPage;