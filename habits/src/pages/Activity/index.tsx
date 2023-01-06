import { IonPage, IonHeader, IonContent } from '@ionic/react';
import './Activity.scss';

const Progress: React.FC = () => (
  <IonPage>
    <IonHeader className="activity-header">
      <div className="main">
        <div className="text">
          <h5 className="bold">Activity</h5>
        </div>
        <div>
          <img alt="filter" src="/assets/icon/17.svg" />
        </div>
      </div>
      <div className="sub-heading">You have 10 New Notifications</div>
      <div className="line"></div>
    </IonHeader>
    <IonContent>
      <div className="activity-main">
        {[...Array(10)].map(() => {
          return (
            <div className="activity-item">
              <div className="visual" style={{ background: '#A7A7A9' }}>
                <img src="/assets/man_1.png" alt="" className="user" />
              </div>
              <div className="text">
                <span className="bold">
                  Adam is done teasing me, in “Hello World”
                </span>
                <p>Dec 29, 2022</p>
              </div>
            </div>
          );
        })}
      </div>
    </IonContent>
  </IonPage>
);
export default Progress;
