import { IonContent, IonButton, IonHeader,IonMenuButton,IonMenu,IonIcon, IonItem, IonInput, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
//import LogIn from '../components/LogIn';

const Tab2: React.FC = () => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Authentication</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList>
          <IonItem>
            <IonInput placeholder="Username"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="password" placeholder="Password"></IonInput>
          </IonItem>
        </IonList>
        <IonButton>Log In </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;