import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
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
      <div>
          <h3>Numero Uno</h3>
          <p>Run down of app (functionality)</p>
          <h3>Number Two</h3>
          <p>Screenshots of app working (examples)</p>
          <p> -Intro + feature page similar</p>
          <p>
            {" "}
            -Show one screenshot on intro and have btn link to feature page
          </p>
          <h3>Numbre trois</h3>
          <p>Pictures/video?</p>
          <h3>Uimhir a ceathar</h3>
          <p>Why this application is useful</p>
          <h3>Nummer funf</h3>
          <p>Mobile intro</p>
          <p> -Link to feature page</p>
        </div>
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