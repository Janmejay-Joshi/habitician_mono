import {
  IonContent,
  IonIcon,
  IonInput,
  IonLabel,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonToggle
} from '@ionic/react'

import { close } from 'ionicons/icons'
import { Ref, SetStateAction, useState } from 'react'
import { createHabit } from '../../utils/feathers/habits'
import './Habit.scss'

interface ModalProps {
  modalRef: Ref<HTMLIonModalElement>
  modalTrigger: string
  dismiss: (type: 'habit' | 'group') => void
}

export function PatchHabitModal({ modalRef, modalTrigger, dismiss }: ModalProps) {
  const [custom, setCustom] = useState<Boolean>(false)

  const newDismiss = () => {
    dismiss('habit')
    setCustom(false)
  }

  return (
    <IonModal
      id="new-patchhabit-modal"
      ref={modalRef}
      trigger={modalTrigger}
      breakpoints={[0.9]}
      initialBreakpoint={0.9}
    >
      <DefaultHabit dismiss={newDismiss} setCustom={setCustom} />
    </IonModal>
  )
}

function DefaultHabit({
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
          <span className="bold">Enter Your Progress</span>
          <button className="close-button" onClick={() => dismiss('habit')}>
            <IonIcon slot="icon-only" size="medium" icon={close}></IonIcon>
          </button>
        </div>
        <IonContent>
          <div className="create-habit">
            <button className="new-button">Save</button>
          </div>
        </IonContent>
      </div>
    </>
  )
}
