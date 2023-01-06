import { IonContent, IonIcon, IonModal, IonInput, IonToggle, IonSelectOption } from '@ionic/react'

import { close } from 'ionicons/icons'
import { Ref, SetStateAction, useState } from 'react'
import { createGroup } from '../../utils/feathers/groups'
import './NewGroupModal.scss'

interface ModalProps {
  modalRef: Ref<HTMLIonModalElement>
  modalTrigger: string
  dismiss: (type: 'habit' | 'group') => void
}

export function NewGroupModal({ modalRef, modalTrigger, dismiss }: ModalProps) {
  const [custom, setCustom] = useState<Boolean>(false)

  const newDismiss = () => {
    dismiss('group')
    setCustom(false)
  }

  return (
    <IonModal
      id="new-group-modal"
      ref={modalRef}
      trigger={modalTrigger}
      breakpoints={[0.9]}
      initialBreakpoint={0.9}
    >
      {
        // custom ? (
        // <Create dismiss={newDismiss} setCustom={setCustom} />
        // ) : (
        //   null
        // )
      }

      <DefaultHabit dismiss={newDismiss} setCustom={setCustom} />
    </IonModal>
  )
}

function Create({
  dismiss,
  setCustom
}: {
  dismiss: (type: 'habit' | 'group') => void
  setCustom: React.Dispatch<SetStateAction<Boolean>>
}) {
  return (
    <>
      <div className="habit-container">
        <div className="header">
          <span className="bold">Create Your Own</span>
          <button className="close-button" onClick={() => dismiss('habit')}>
            <IonIcon slot="icon-only" size="medium" icon={close}></IonIcon>
          </button>
        </div>
      </div>
      <div className="new-habit-form"></div>
      <div className="create-habit">
        <button className="new-button" onClick={() => setCustom(false)}>
          Save
        </button>
      </div>
    </>
  )
}

function DefaultHabit({
  dismiss,
  setCustom
}: {
  dismiss: (type: 'habit' | 'group') => void
  setCustom: React.Dispatch<SetStateAction<Boolean>>
}) {
  const [name, setName] = useState<string | undefined>('')
  const [description, setDescription] = useState<string | undefined>('')
  const [members, setMembers] = useState<Array<string>>([])

  const submitData = () => {
    if (name && description) createGroup({ name, description })
  }

  return (
    <>
      <div className="habit-container">
        <div className="header">
          <span className="bold">New Group</span>
          <button className="close-button" onClick={() => dismiss('habit')}>
            <IonIcon slot="icon-only" size="medium" icon={close}></IonIcon>
          </button>
        </div>
        <IonContent>
          <div className="new-habit-form">
            <div className="div-name">
              <div className="div-name-icon">
                <img alt="pencil" src="./assets/icon/31.svg" />
              </div>
              <IonInput
                className="div-name-text"
                onIonInput={(e) => {
                  setName(e.target.value?.toString())
                }}
                placeholder="Add Subject"
              ></IonInput>
            </div>
            <div className="description">
              <div className="description-icon">
                <img alt="pencil" src="./assets/icon/32.svg" />
              </div>
              <IonInput
                onIonInput={(e) => {
                  setDescription(e.target.value?.toString())
                }}
                className="description-text"
                placeholder="Description"
              ></IonInput>
            </div>

            <div className="description">
              <div className="description-icon">
                <img alt="pencil" src="./assets/icon/40.svg" />
              </div>
              <IonInput className="description-text" placeholder="Add Participants"></IonInput>
            </div>
          </div>
        </IonContent>
      </div>
      <div className="create-habit">
        <button className="new-button" onClick={submitData}>
          Save
        </button>
      </div>
    </>
  )
}
