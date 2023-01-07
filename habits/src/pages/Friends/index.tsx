import React, { useEffect, useRef, useState } from 'react'

import { IonPage, IonHeader, IonContent, IonCard, IonAvatar, IonLabel } from '@ionic/react'
import { Link } from 'react-router-dom'
import './Friends.scss'
import { FriendModal } from './FriendModel'
import { getUsers } from '../../utils/feathers/user'
import { getUser } from '../../utils/feathers/auth'

export default function Friends() {
  const friendModal = useRef<HTMLIonModalElement>(null)

  function dismiss(type: 'habit' | 'group') {
    if (type === 'habit') friendModal.current?.dismiss()
    else friendModal.current?.dismiss()
  }

  const [users, setUsers] = useState([])
  const [user, setUser] = useState<any>()

  useEffect(() => {
    getUser().then((res) => {
      setUser(res)
    })

    getUsers().then((res) => {
      if (user) {
        const filterData = res.data.filter((item: any) => item._id !== user._id)
        setUsers(filterData)
      }
    })
  })

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
          <div className="friends_headermainsub">You have {users.length} friends</div>
          <div className="friends_headermainline"></div>
        </IonHeader>

        <IonContent>
          {users.map((data: any, index) => {
            return (
              <Link to={`/friends/f/${data._id}`} key={index}>
                <IonCard className="friends_card">
                  <div className="friends_main">
                    <div className="friends_mainsub">
                      <IonAvatar className="friends_image">
                        <img alt="friend logo" src={data.avatar} />
                      </IonAvatar>
                      <div className="friends_text">{data.name}</div>
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
