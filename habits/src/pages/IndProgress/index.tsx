import { IonPage, IonContent, IonBackButton, IonIcon } from '@ionic/react'
import { readerOutline } from 'ionicons/icons'
import './IndProgress.scss'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

import { RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export const data = {
  labels: ['Streak', 'Weekly progress', 'Montly progress'],
  datasets: [
    {
      label: 'Your Habit',
      data: [97, 87, 93,85.86,95],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
}
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data1 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: ['45', '12'],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Dataset 2',
      data: ['45', '12'],
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
}

const IndProgress: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="indprog_headercard">
          <div className="indprog_headercardback">
            <IonBackButton defaultHref="/groups"></IonBackButton>
          </div>
          <div className="indprog_headercardback1"></div>
        </div>
        <div className="indprog_box">
          <div className="indprog_box_text">Write</div>
          <div className="indprog_box_icon">
            <IonIcon icon={readerOutline} />
          </div>
        </div>
        <div className="overview">
          <div className="overview-1">
            <b>Overview</b>
          </div>
          <div className="overview-2">
            <Radar className='overview-2-chart' data={data} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}
export default IndProgress
