import { IonContent, IonButton, IonHeader,IonMenuButton,IonMenu,IonIcon, IonItem, IonInput, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
//import LogIn from '../components/LogIn';

const CourseMgmtPage: React.FC = () => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Testing Course Management</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList>
          <IonItem>
            <IonInput placeholder="ignore for now"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput  placeholder="ignore for now"></IonInput>
          </IonItem>
        </IonList>
        <IonButton>Log In </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CourseMgmtPage;