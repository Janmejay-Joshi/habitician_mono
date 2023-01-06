import { IonPage, IonHeader, IonContent, IonCard, IonAvatar, IonLabel } from '@ionic/react'
import { Link } from 'react-router-dom'
import './Friends.scss'

const Friends: React.FC = () => (
  <IonPage>
    <IonHeader className="friends_header">
      <div className="friends_headermain bold">
        <div className="friends_headermaintext">
          <h5>Friends</h5>
        </div>
        <div>
          <img alt="search" src="/assets/icon/16.svg" />
        </div>
        <div>
          <img alt="sort" src="/assets/icon/15.svg" />
        </div>
      </div>
      <div className="friends_headermainsub">You have 14 friends</div>
      <div className="friends_headermainline"></div>
    </IonHeader>
    <IonContent>
      {[...Array(14)].map((data, index) => {
        return (
          <Link to="/friends/f" key={index}>
            <IonCard className="friends_card">
              <div className="friends_main">
                <div className="friends_mainsub">
                  <IonAvatar className="friends_image">
                    <img alt="friend logo" src="/assets/icon/24.svg" />
                  </IonAvatar>
                  <div className="friends_text">Spandita Dwivedi</div>
                </div>
                <div className="friends_mainsub2">
                  <IonLabel className="friends_text2">🔥17</IonLabel>
                  <IonLabel className="friends_arrow">
                    <img className="friends_arrowimg" alt="arrow" src="/assets/icon/14.svg" />
                  </IonLabel>
                </div>
              </div>
            </IonCard>
          </Link>
        )
      })}
    </IonContent>
  </IonPage>
)
export default Friends
