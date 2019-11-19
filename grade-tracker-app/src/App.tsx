import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonMenu, 
  IonToolbar,
  IonList,
  IonContent,
  IonHeader,
  IonTitle,
  IonItem,
  IonSplitPane,
  IonPage
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { apps, flash, send,people,body, archive } from 'ionicons/icons';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Home from './pages/Home'; 
import Details from './pages/Details';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



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

export const App: React.FC = () => (
  <Router>
    <div id="app">
      <IonApp>
        <IonSplitPane contentId="main">
          <div id="menu">
            <IonToolbar>
              <IonTitle>
                Menu
              </IonTitle>
            </IonToolbar>
          </div>
          <IonPage id="main">
            <Switch>
            <Route path="/CrsMgmt" component={Home} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true} />
            <Route path="/tab2/details" component={Details} />
            <Route path="/tab3" component={Tab3} />
            <Route path="/tab4" component={Tab4} />
            <Route path="/" component={Home} />} 
            </Switch>
          </IonPage>
        </IonSplitPane>
      </IonApp>
    </div>
  </Router>
);

export default App;
