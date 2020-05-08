import { IonImg, IonCardContent, IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonCard } from '@ionic/react';
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
interface Person {
  name: string;
  email: string;
  position: string;
  photo: string;
}
type Item = {
  src: string;
  text: string;
};


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
            When page is loaded, you are brought to the login page. Here you are instructed to log in 
            or create an account.            
            When your account is created you are guided to the course management page.
          </IonCardContent>
        </IonCard>

        </IonCard>

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