import { 
  IonContent, 
  IonButton, 
  IonHeader, 
  IonItem, 
  IonInput, 
  IonLabel, 
  IonList, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonCard
} from '@ionic/react';
import React, { useState } from 'react';
import { apps, flash, send,people,body } from 'ionicons/icons';
import '../styles/Home.scss';

const SubjectsPage: React.FC = () => {
  
  const [module, setModule] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Subjects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonTitle>Modules</IonTitle>
          <IonInput 
            placeholder="Enter Module" 
            value={module}
            onIonChange={(e: any) => setModule(e.target.value)}
          />
        </IonCard>
        <IonButton>Add Module</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SubjectsPage;