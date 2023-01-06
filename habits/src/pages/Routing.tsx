import { Redirect, Route, useHistory } from 'react-router-dom'
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { home, people, personAdd, personCircle, pieChart } from 'ionicons/icons'

import Home from './Home'
import Activity from './Activity'
import Profile from './Profile'

import './Routing.scss'
import Friends from './Friends'
import SingleFriends from './Friends/SingleFriend'
import Groups from './Groups'
import SingleGroup from './Groups/SingleGroup'
import { getUser } from '../utils/feathers/auth'
import { useEffect } from 'react'

const Routing: React.FC = () => {
  const history = useHistory()

  useEffect(() => {
    try {
      getUser()
        .then((res) => {
          if (!res) history.push('/splashscreens')
        })
        .catch(() => {
          history.push('/splashscreens')
        })
    } catch {
      history.push('/splashscreens')
    }
  })
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/activity">
              <Activity />
            </Route>
            <Route exact path="/friends">
              <Friends />
            </Route>
            <Route exact path="/friends/f">
              <SingleFriends />
            </Route>
            <Route exact path="/groups">
              <Groups />
            </Route>
            <Route exact path="/groups/g">
              <SingleGroup />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/indprogress">
              {/* <IndProgress/> */}
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="activity" href="/activity">
              <IonIcon icon={pieChart} />
              <IonLabel>Activity</IonLabel>
            </IonTabButton>
            <IonTabButton tab="friends" href="/friends">
              <IonIcon icon={personAdd} />
              <IonLabel>Friends</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Groups" href="/Groups">
              <IonIcon icon={people} />
              <IonLabel>Grooups</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={personCircle} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

export default Routing
