import { IonPage, IonContent, IonBackButton, IonIcon, IonButton } from '@ionic/react'
import { leafOutline, person, pulse, readerOutline, sunny, walk } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import './SingleGroup.scss'

const SingleGroup: React.FC = () => (
  <IonPage>
    <IonContent>
      <div className="opengroups_headercard">
        <div className="opengroups_headercardback">
          <IonBackButton defaultHref="/groups"></IonBackButton>
        </div>
        <div className="opengroups_headercardback1"></div>
      </div>
      <div className="opengroups_profile">
        <img className="opengroups_profile1" alt="profile" src="/assets/icon/31.svg" />
      </div>
      <div className="opengroups_main">
        <div className="opengroups_card">
          <div className="bold">
            <h6>Chai, Coffee : Code</h6>
          </div>
          <div>
            <img alt="profile" src="/assets/icon/21.svg" />
          </div>
        </div>
        <div className="opengroups_cardsub">
          <div className="opengroups_cardsub_glist">
            Groups <span className="opengroups_cardsub_glist_dot">.</span>
            <span className="opengroups_cardsub_glist_num">5</span>
            <IonIcon icon={person}></IonIcon>
          </div>
          <div className="opengroups_cardsub_glist">
            Habits <span className="opengroups_cardsub_glist_dot">.</span>
            <span className="opengroups_cardsub_glist_num">3</span>
            <IonIcon icon={leafOutline}></IonIcon>
          </div>
        </div>
        <div className="opengroups_cardline"></div>
      </div>

      <div className="opengroups_habits_o">
        <div className="opengroups_habits_i">
          <IonButton className="opengroups_habits_l" fill="clear">
            <Link to="/grpprogress">
              <IonIcon icon={pulse}></IonIcon>
              Group Progress
            </Link>
          </IonButton>
          {[['Read', 'readerOutline'], ['Run', 'walk'], ['Meditate'], ['Gym']].map((d, i) => {
            return (
              <IonButton className="opengroups_habits_l" fill="clear" key={i}>
                <IonIcon icon={readerOutline}></IonIcon>
                {d[0]}
              </IonButton>
            )
          })}
        </div>
      </div>
      <div className="opengroups_habits_title">
        <div className="opengroups_habits_title_wrapper">
          <div className="opengroups_habits_title_l">
            <span className="opengroups_habits_title_l_text">Leaderboard</span>
          </div>
          <div className="opengroups_habits_title_r">
            <ul className="opengroups_habits_title_r_l">
              <li>
                <IonIcon icon={readerOutline}></IonIcon>
              </li>
              <li>
                <IonIcon icon={walk}></IonIcon>
              </li>
              <li>
                <IonIcon icon={sunny}></IonIcon>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {['JJ', 'Adam', 'Spandita', 'Tarushi'].map((data, index) => {
        return (
          <div className="opengroups_habit" key={index}>
            <div className="opengroups_habit_wrapper">
              <div className="opengroups_habit_l">
                <img className="opengroups_habit_l_profile" alt="" src="/assets/101.png"></img>
                <span className="opengroups_habit_l_text">{data}</span>
              </div>
              <div className="opengroups_habit_r">
                <ul className="opengroups_habit_r_l">
                  <li>10</li>
                  <li>15</li>
                  <li>20</li>
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </IonContent>
  </IonPage>
)
export default SingleGroup
