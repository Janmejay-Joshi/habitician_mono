import { IonPage, IonContent, IonBackButton, IonIcon } from '@ionic/react'
import { readerOutline } from 'ionicons/icons'
import './IndProgress.scss'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export const data = {
  labels: ['Streak', 'Weekly progress', 'Montly progress', 'Failure'],
  datasets: [
    {
      label: 'Your Habit',
      data: [97, 87, 93, 87],
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
      text: 'Bar Chart'
    }
  }
}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'November',
  'December'
]

export const data1 = {
  labels,
  datasets: [
    {
      label: 'Habits',
      data: ['45', '12', '78', '69', '32', '65'],
      backgroundColor: '#ff00fd'
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
            <Radar redraw className="overview-2-chart" data={data} />
          </div>
        </div>
        <div className="bar">
          <Bar width={100} height={100} options={options} data={data1} />
        </div>
        <div className="heat-map">
          <CalendarHeatmap
            startDate={new Date('2022-01-01')}
            endDate={new Date('2022-06-31')}
            values={[
              { date: '2022-01-01', count: 12 },
              { date: '2022-01-22', count: 122 },
              { date: '2022-01-30', count: 38 }
              // ...and so on
            ]}
          />
        </div>
      </IonContent>
    </IonPage>
  )
}
export default IndProgress
