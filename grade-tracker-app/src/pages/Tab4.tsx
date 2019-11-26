import { IonContent, IonButton, IonHeader, IonItem, IonInput, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { apps, flash, send,people,body } from 'ionicons/icons';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <div>
            <IonButton shape="round">Round Button</IonButton>
          </div>
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

export default Tab4;