import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
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
            TITLE TBD/gracker
            <IonButton
              class="ion-float-right"
              routerLink="/LogIn">
              Log in
            </IonButton>
          </h1>
        </div>
      </IonHeader>

      <IonContent>
        <h2> Register here! </h2>


      </IonContent>
    </IonPage>
  );
};

export default Home;
