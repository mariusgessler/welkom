import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { chatboxes, flash, cash } from 'ionicons/icons';
import NewsPage from './pages/NewsPage';
import TranslatorPage from './pages/TranslatorPage';
import ConverterPage from './pages/ConverterPage';

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

function App() {
  return  (
  <IonApp style={{maxWidth: "500px", margin: "0 auto"}}>

    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/news" component={NewsPage} exact={true} />
          <Route path="/translator" component={TranslatorPage} exact={true} />
          <Route path="/converter" component={ConverterPage} exact={true}/>
          <Route exact path="/" render={() => <Redirect to="/news" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="news" href="/news">
            <IonIcon icon={flash} />
            <IonLabel>News</IonLabel>
          </IonTabButton>
          <IonTabButton tab="translator" href="/translator">
            <IonIcon icon={chatboxes} />
            <IonLabel>Translator</IonLabel>
          </IonTabButton>
          <IonTabButton tab="converter" href="/converter">
            <IonIcon icon={cash} />
            <IonLabel>Converter</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>

  </IonApp>
);
}

export default App;
