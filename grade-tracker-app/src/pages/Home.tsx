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
  function loginBtnClicked() {
    console.log("button clicked");
    return <LogIn/>;
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
                  loginBtnClicked();
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
        <body>
              <p>Look at all this content...</p>
        </body>
      </IonContent>
    </IonPage>
  );
};

export default Home;
