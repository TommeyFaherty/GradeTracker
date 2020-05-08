import { IonContent, IonButton, IonHeader,IonMenuButton,IonMenu,IonIcon, IonItem, IonInput, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonActionSheet } from '@ionic/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { logoutUser } from '../firebaseConfig'
import {useHistory} from 'react-router';
import '../styles/CourseMgmtPage.scss';
import { setUserState } from '../redux/actions';
import { toast } from '../components/toast';

export const CourseMgmtPage: React.FC = () => {

  const username = useSelector((state:any) => state.user.username);
  const history = useHistory();

  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [examWeight, setExamWeight] = useState('');
  const [module, setModule] = useState('');

  const [hidden, setHidden] = useState(true);

  async  function logout(){
    await logoutUser()
     history.replace('./')
  }

  function showContent(e: any) {

    if(course != '')
      setHidden(false);
    else
      console.log("module empty");
      toast("Enter Module");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Testing Course Management
            <IonButton onClick={logout} class="ion-float-right">Logout</IonButton>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent> 
        <p>hello {username} </p> 
        <p>Course: {course}</p>
        <p>Year: {year}</p>
        <p>Module: {module}</p>
        <p>Module Exam Weight: {examWeight}</p>
        <IonCard>
          <IonCardContent>
            <IonTitle>Enter your current course:</IonTitle>
            <IonInput 
              placeholder="Enter Course" 
              value={course}
              onIonChange={(e: any) => setCourse(e.target.value)}
            />
            <IonButton onClick={(e: any) => showContent(e)} hidden={!hidden}>Enter</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard hidden={hidden}>
          <IonCardContent class="testClass">
            <IonTitle>Enter current Year:</IonTitle>
            <IonInput placeholder="Year"
            value={year}
            onIonChange={(e: any) => setYear(e.target.value)}
            ></IonInput>
          </IonCardContent>
          
          <IonCardContent>
            <IonTitle>Enter your modules/subjects: </IonTitle>
            <IonInput placeholder="modules"
            value={module}
            onIonChange={(e: any) => setModule(e.target.value)}
            />
            <IonButton>Input assessment details</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard hidden={hidden}>
          <IonCardContent>
            <IonTitle>Enter exams weight: </IonTitle>
            <IonInput placeholder="weight"
            value={examWeight}
            onIonChange={(e: any) => setExamWeight(e.target.value)}
            />
            <IonTitle>Enter result as percentage: </IonTitle>
            <IonInput placeholder="percentage"
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CourseMgmtPage;
//This page stores the year, course and modules for each user. 