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
        <IonCard color="primary">
          <IonHeader>What is Gracker?</IonHeader>
          <IonCardContent>
            Gracker is a web-app designed to help students keep track of their grades throughout their academic terms.
            It's clean layout and simplitic design allows for easy navigation and a better overall user experience.  
          </IonCardContent>
        </IonCard>
  
        <IonCard color="medium">
          <IonHeader >Why would I need this?</IonHeader>
          <IonCardContent>
            Gracker is here to help you stay organised. It allows a space for you to access your results easily and 
            consistently. Being able to track your academic highs and lows can help students understand where they need 
            to focus more and could be the visual motivator needed. 
          </IonCardContent>
        </IonCard>

        <IonCard color="medium">
          <IonHeader>How do I use it?</IonHeader>
          <IonCardContent>
            Simply click on the log in button in the top right. Then click the link to create a new account and you 
            can get started immediately!  
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
