import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonCard } from '@ionic/react';
import React, { useState } from 'react';


interface Person {
  name: string;
  email: string;
  position: string;
  photo: string;
}

const FeaturesPage: React.FC = () => {

  const [people, setPeople] = useState<Person[]>([]);

  useIonViewWillEnter(async () => {
    const result = await fetch('https://uifaces.co/api?limit=25', {
      headers: { 'x-API-KEY': '873771d7760b846d51d025ac5804ab' }
    });
    const data = await result.json();
    setPeople(data);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Features</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
        <IonHeader>Page Requirements</IonHeader>
        <IonTitle>Numero One</IonTitle>
          <p> - Run down of app (functionality)</p>

          <IonTitle>Number Two</IonTitle>
          <p> - Screenshots of app working (examples)</p>
          <p> - Intro + feature page similar</p>
          <p>
            {" "}
            - Show one screenshot on intro and have btn link to feature page
          </p>
          
          <IonTitle>Number three</IonTitle>
          <p> - Pictures/video?</p>
          
          <IonTitle>Number four</IonTitle>
          <p> - Why this application is useful</p>
          
          <IonTitle>Number five</IonTitle>
          <p> - Mobile intro</p>
          <p> - Link to feature page</p>
        </IonCard>
        <IonList>
          {people.map((person, idx) => <EmployeeItem key={idx} person={person} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const EmployeeItem: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <IonItem >
      <IonAvatar slot="start">
        <img src={person.photo} />
      </IonAvatar>
      <IonLabel>
        <h2>{person.name}</h2>
        <p>{person.position}</p>
      </IonLabel>
    </IonItem>
  );
}

export default FeaturesPage;