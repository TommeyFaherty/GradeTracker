import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonTitle,
  IonToast,
  IonButton,
  IonCardSubtitle,
  IonHeader,
  IonCardTitle,
  IonPage,
  IonContent
} from "@ionic/react";
//import { IonPage } from '@ionic/react/dist/types/components/IonPage';
import LogIn from "./LogIn";
import '../styles/Home.scss';

const Home = () => {
  const [toastIsShown, setToastIsShown] = useState(false);

  const showToast = () => {
    setToastIsShown(true);
  };


  return (
    <IonPage>
      <IonHeader>
        <div>
          <h1>
            <IonTitle>
              Gracker
              <IonButton
                class="ion-float-right"
                routerLink="/LogIn">
                Log in
              </IonButton>
            </IonTitle>
          </h1>
        </div>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonHeader>What is Gracker?</IonHeader>
          <IonCardContent>
            Gracker is a web-app designed to help students keep track of their grades throughout their academic terms.
            It's clean layout and simplitic design allows for easy navigation and a better overall user experience.  
          </IonCardContent>
        </IonCard>
  
      </IonContent>
    </IonPage>
  );
};

export default Home;
