import {
  IonPage,
  IonHeader,
  IonContent,
  IonLabel,
  IonToggle,
} from '@ionic/react';
import './Profile.scss';
const Profile: React.FC = () => (
  <IonPage>
    <IonHeader></IonHeader>
    <IonContent className="profile_content">
      <div className="profile_top">
        <img className="profile_image1" src="/assets/man_1.png" alt="" />
        <div className="profile_image">
          <div className="profile_main">
            <h6 className="bold">Adam Pithenwala</h6>
            <img src="/assets/icon/20.svg" alt="" />
          </div>
          <div className="profile_para">
            <p>adam@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="profile_cads">
        <div className="profile_mains">
          <div className="profile_photu">
            <img alt="Silhouette of mountains" src="/assets/icon/27.svg" />
          </div>
          <div className="profile_labels">
            <div className="profile_position">
              <IonLabel className="profile_head">
                <span>General Preferences</span>
              </IonLabel>
            </div>
          </div>
        </div>

        <div className="profile_mains">
          <div className="profile_photu">
            <img alt="Silhouette of mountains" src="/assets/icon/28.svg" />
          </div>
          <div className="profile_labels">
            <div className="profile_position">
              <IonLabel className="profile_head">
                <span>Export data</span>
              </IonLabel>
            </div>
          </div>
        </div>

        <div className="profile_mains">
          <div className="profile_photu">
            <img alt="Silhouette of mountains" src="/assets/icon/29.svg" />
          </div>
          <div className="profile_labels">
            <div className="profile_positions">
              <IonLabel className="profile_head">
                <span>Privacy</span>
              </IonLabel>
              <div className="profile_toggle">
                <IonToggle slot="end"></IonToggle>
              </div>
            </div>
          </div>
        </div>

        <div className="profile_mains">
          <div className="profile_photu">
            <img alt="Silhouette of mountains" src="/assets/icon/30.svg" />
          </div>
          <div className="profile_labels">
            <div className="profile_position">
              <IonLabel className="profile_head">
                <span>Logout</span>
              </IonLabel>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  </IonPage>
);
export default Profile;
