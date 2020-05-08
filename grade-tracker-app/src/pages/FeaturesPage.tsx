import { IonCardContent, IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonCard } from '@ionic/react';
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";


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
      <IonCard color="primary">
          <IonHeader>The Rundown!</IonHeader>
          <IonCardContent>
            This app allows you to log in and enter your module and course details! 
            You can easily keep track of what subjects and grades you receive. 
            When you first load the page you will be instructed to log in or create an account. 
            After logging in the course management page appears. The course management page allows
            the user to enter module, and year that they are in. 
          </IonCardContent>
        </IonCard>
        <IonCard color="medium">
          <IonHeader >How to use this app: </IonHeader>
          <IonCardContent>
            Gracker is here to help you stay organised. It allows a space for you to access your results easily and 
            consistently. Being able to track your academic highs and lows can help students understand where they need 
            to focus more and could be the visual motivator needed. 
          </IonCardContent>
        </IonCard>

          <IonTitle>How to use this app!</IonTitle>
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