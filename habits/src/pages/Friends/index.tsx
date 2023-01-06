import React, { useRef, useState } from 'react'

import { IonPage, IonHeader, IonContent, IonCard, IonAvatar, IonLabel } from '@ionic/react'
import { Link } from 'react-router-dom'
import './Friends.scss'
import { FriendModal } from './FriendModel'

export default function Friends() {
  const friendModal = useRef<HTMLIonModalElement>(null)

  function dismiss(type: 'habit' | 'group') {
    if (type === 'habit') friendModal.current?.dismiss()
    else friendModal.current?.dismiss()
  }

  return (
    <>
      <IonPage>
        <IonHeader className="friends_header">
          <div className="friends_headermain bold">
            <div className="friends_headermaintext">
              <h5>Friends</h5>
            </div>
            <div>
              <img id="friends-model" alt="search" src="/assets/icon/16.svg" />
            </div>
            <div>
              <img id="open-friend" alt="sort" src="/assets/icon/41.svg" />
            </div>
          </div>
          <div className="friends_headermainsub">You have 14 friends</div>
          <div className="friends_headermainline"></div>
        </IonHeader>

        <IonContent>
          {[...Array(14)].map((data, index) => {
            return (
              <Link to="/friends/f">
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
      <FriendModal modalRef={friendModal} modalTrigger={'open-friend'} dismiss={dismiss} />
    </>
  )
}