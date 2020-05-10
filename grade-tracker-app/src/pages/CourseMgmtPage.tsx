import { IonContent, IonButton, IonHeader,IonMenuButton,IonMenu,IonIcon, IonItem, IonInput, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonActionSheet } from '@ionic/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { logoutUser } from '../firebaseConfig'
import {useHistory} from 'react-router';
import '../styles/CourseMgmtPage.scss';
import { setUserState } from '../redux/actions';
import { toast } from '../components/toast';
import { database } from 'firebase';
import * as firebase from 'firebase';

export const CourseMgmtPage: React.FC = () => {

  const username = useSelector((state:any) => state.user.username);
  const history = useHistory();

  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [examWeight, setExamWeight] = useState('');
  const [module, setModule] = useState('');

  const [hidden, setHidden] = useState(true);
  const [hiddenDetails, setHiddenDetails] = useState(true);

  async  function logout(){
    await logoutUser()
     history.replace('./')
  }

  function showContent(e: any) {

    //If Course has name show next card to add information
    //Otherwise show pop-up toast
    //If module has a name show next card to add information
    //Otherwise prompt user to enter name of module with toast
    if(course != '' && hidden == true){
      setHidden(false);
    }
    else if(course == ''){
      console.log("module empty");
      toast("Enter Course");
    }
    else if(hidden == false && module != ''){
      setHiddenDetails(false);
    }
    else if(hidden == false && module == ''){
      toast("Enter Module");
    }
  }

  function writeToDatabase()
  {
    firebase.database().ref('users/'+username+'/module').set({
      module: module,
      course: course,
      year: year,
      examWeight: examWeight
    });
  }

  function saveContent(e: any){
    //Checks if weight only contains numbers
    var isnum = /^\d+$/.test(examWeight);
    
    if(examWeight == ''){
      toast("Enter Exam Weight");
    }
    else if(isnum)
    {
      toast("it works");

      //Save all information to Firebase here
      //...
      writeToDatabase();
    }
    else if(!isnum && examWeight != '')
      toast("Please only enter numbers")
    
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
            <IonButton onClick={(e:any) => showContent(e)}>Input assessment details</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard hidden={hiddenDetails}>
          <IonCardContent>
            <IonTitle>Enter exams weight: </IonTitle>
            <IonInput placeholder="weight"
            value={examWeight}
            onIonChange={(e: any) => setExamWeight(e.target.value)}
            />
            <IonTitle>Enter result as percentage: </IonTitle>
            <IonInput placeholder="percentage"
            />
            <IonButton onClick={(e:any) => saveContent(e)}>Save</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CourseMgmtPage;
//This page stores the year, course and modules for each user. 