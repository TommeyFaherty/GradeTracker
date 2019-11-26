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
import LogIn from "../components/LogIn";

const Home = () => {
  const [toastIsShown, setToastIsShown] = useState(false);

  const showToast = () => {
    setToastIsShown(true);
  };

  //method for button goes here
  function example() {
    console.log("button clicked");
    return <LogIn />;
  }

  return (
    <IonPage>
      <IonHeader>
        <div>
          <h1>
            TITLE TBD/gracker
            <IonButton
              onClick={() => {
                {
                  example();
                }
              }}
              class="ion-float-right"
            >
              Log in
            </IonButton>
          </h1>
        </div>
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
      </IonContent>
    </IonPage>
  );
};

export default Home;
