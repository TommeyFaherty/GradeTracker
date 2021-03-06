import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { IonApp, IonSplitPane, IonPage, IonHeader, IonToolbar, IonTitle, IonSpinner } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import CourseMgmtPage from './pages/CourseMgmtPage';
import FeaturesPage from './pages/FeaturesPage';
import SubjectsPage from './pages/SubjectsPage';
import Home from './pages/Home'; 
import LogIn from './pages/LogIn'; 
import Register from './pages/Register'; 
import Details from './pages/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideMenu from './components/SideMenu';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//firebase
import * as firebase from 'firebase'

import { getCurrentUser } from './firebaseConfig'

import{ setUserState } from './redux/actions'

import { useDispatch } from 'react-redux'

const RoutingSystem: React.FC = () => {
  
 return <Router>
    <div id="app">
      <IonApp>
        <IonSplitPane contentId="main">
        <SideMenu></SideMenu>
        
  
          <IonPage id="main">
            <Switch>
            <Route path="/CrsMgmt" component={Home} exact={true} />
            <Route path="/LogIn" component={LogIn} exact={true} />
            <Route path="/Register" component={Register} exact={true} />
            <Route path="/CourseMgmtPage" component={CourseMgmtPage} exact={true} />
            <Route path="/CourseMgmtPage/details" component={Details} />
            <Route path="/FeaturesPage" component={FeaturesPage} />
            <Route path="/SubjectsPage" component={SubjectsPage} />
            <Route path="/" component={Home} />} 
            </Switch>
          </IonPage>
        </IonSplitPane>
      </IonApp>
    </div>
  </Router>
}

const App: React.FC = () => {
  const [busy, setBusy] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
  getCurrentUser().then((user:any) =>{
    console.log(user)
    if (user) {
    //regular login
    console.log('user: ',firebase.auth().currentUser)
    dispatch(setUserState(user.email))
    window.history.replaceState({}, '', '/CourseMgmtPage')    
    }
    else {
      window.history.replaceState({}, '', '/LogIn')              
    }
    setBusy(false)
  })
  }, [])
  return <IonApp>{busy ? <IonSpinner/>: <RoutingSystem/>}</IonApp>
}
 

export default App;