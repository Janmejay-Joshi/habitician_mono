import { IonContent, IonIcon, IonModal, IonInput, IonSelectOption, IonSelect } from '@ionic/react'

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
  const [color, setColor] = useState<string>('')
  const [members, setMembers] = useState<Array<string>>([])

  const submitData = () => {
    if (name && description && color) {
      createGroup({ name, description, color })
      dismiss('group')
    }
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
            <div className="two">
              <div className="color">
                <div className="color-icon">
                  <img alt="pencil" src="./assets/icon/37.svg" />
                </div>
                <div className="color-text">
                  <IonSelect
                    placeholder="Color"
                    onIonChange={(e) => {
                      setColor(e.target.value)
                    }}
                  >
                    <IonSelectOption value="red">Red</IonSelectOption>
                    <IonSelectOption value="green">Green</IonSelectOption>
                    <IonSelectOption value="blue">Blue</IonSelectOption>
                    <IonSelectOption value="yellow">Yellow</IonSelectOption>
                    <IonSelectOption value="orange">Orange</IonSelectOption>
                  </IonSelect>
                </div>
              </div>
              <div className="icon">
                <div className="icon-icon">
                  <img alt="pencil" src="./assets/icon/36.svg" />
                </div>
                <div className="icon-text">Icon</div>
              </div>
            </div>
            <div className="description">
              <div className="description-icon">
                <img alt="pencil" src="./assets/icon/40.svg" />
              </div>
              <IonSelect placeholder="Select friends" multiple={true}>
                <IonSelectOption value="apples">Adam Pithenwala</IonSelectOption>
                <IonSelectOption value="oranges">Spandita Dwivwdi</IonSelectOption>
                <IonSelectOption value="bananas">Tarushi Jain</IonSelectOption>
              </IonSelect>
            </div>
            <div className="description">
              <div className="description-icon">
                <img alt="pencil" src="./assets/icon/42.svg" />
              </div>
              <IonSelect placeholder="Select Habit" multiple={true}>
                <IonSelectOption value="habit">Running</IonSelectOption>
                <IonSelectOption value="habit">Reading</IonSelectOption>
                <IonSelectOption value="habit">Gym</IonSelectOption>
              </IonSelect>
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
