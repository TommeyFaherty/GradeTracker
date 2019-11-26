import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonToast, IonButton, IonHeader, IonPage, IonContent } from "@ionic/react";
//import { IonPage } from '@ionic/react/dist/types/components/IonPage';

const Home = () => {
    const [toastIsShown, setToastIsShown] = useState(false);

    const showToast = () => {
        setToastIsShown(true);
    }

    //method for button goes here
    const example = async () => {

    };

    return (
        <IonPage>
            <IonHeader>
                <div>
                    <h1>TITLE TBD
                        <IonButton onClick={() => example()} class="ion-float-right">Log in</IonButton>
                    </h1>
                </div>
            </IonHeader>

            <IonContent>
                <div>
                    <h3>Numero Uno</h3>
                    <p>Run down of app (functionality)</p>
                    <h3>Number Two</h3>
                    <p>Screenshots of app working (examples)</p>
                    <h3>Numbre trois</h3>
                    <p>Pictures/video?</p>
                    <h3>Uimhir a ceathar</h3>
                    <p>Why this application is useful</p>
                    <h3>Nummer funf</h3>
                    <p></p>
                </div>
            </IonContent>

            <IonCard>
                <IonCardHeader>
                    <h1>Ionic + React</h1>

                </IonCardHeader>
                <IonCardContent>
                    This is my first Ionic React application!
              <div>
                        <IonButton onClick={() => showToast()}>
                            Show the toast
                  </IonButton>
                        <IonToast
                            isOpen={toastIsShown}
                            onDidDismiss={() => setToastIsShown(false)}
                            message="Let's show a toast!"
                            duration={3000}
                        />
                    </div>
                </IonCardContent>
            </IonCard>
        </IonPage>
    );
}

export default Home;
