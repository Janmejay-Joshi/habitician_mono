import { IonPage, IonHeader, IonContent } from '@ionic/react';
import { useEffect, useRef } from 'react';
import moment from 'moment';
import FAB from './FAB';

import './Home.scss';

function Home() {
  const scrollRef = useRef<Array<HTMLDivElement | null>>([]);
  const groupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current[0]?.scrollIntoView();
      // groupRef.current?.scrollBy(12, 0);
    }
  });

  const getDatesInRange = (min: any, max: any) => {
    return Array((max - min) / 86400000)
      .fill(0)
      .map((_, i) => new Date(new Date().setDate(min.getDate() + i)));
  };

  return (
    <IonPage>
      <IonHeader className="home-header">
        <h5 className="bold">
          Good Morning, <br /> Spandita !
        </h5>
        <img src="/assets/sunrise 1.svg" alt="Sunrise" />
      </IonHeader>
      <IonContent>
        <div className="home-main">
          <div className="scroll-dates">
            <div className="heading">
              <h6 className="bold">Today</h6>
              <p>
                {new Date().toLocaleDateString('en-us', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
              <div className="scroll-container" ref={groupRef}>
                {getDatesInRange(
                  new Date(2023, 1, 1),
                  new Date(2023, 2, 2)
                ).map((data: Date, index) => {
                  return (
                    <>
                      {moment(data).week() === moment().week() ? (
                        <div
                          ref={(element) => {
                            scrollRef.current[index] = element;
                          }}
                          key={index}
                        >
                          <DateItem data={data} />
                        </div>
                      ) : (
                        <DateItem data={data} key={index} />
                      )}
                    </>
                  );
                })}
              </div>
            </div>
            <div className="home-tasks">
              <div className="tasks">
                <span className="bold">Completed</span>
                <div className="tasks-container">
                  {['Red', 'Blue', 'Green'].map((data, index) => {
                    return (
                      <div className="task" key={index}>
                        <div
                          className="color-bar"
                          style={{
                            background: data,
                          }}
                        ></div>
                        <div className="habit">
                          <p>🧘🏽‍♂️</p>
                          <p>{data}</p>
                        </div>
                        <div className="tick"></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="tasks">
                <span className="bold">Pending</span>
                <div className="tasks-container">
                  {['Purple', 'Blue'].map((data, index) => {
                    return (
                      <div className="task" key={index}>
                        <div
                          className="color-bar"
                          style={{
                            background: data,
                          }}
                        ></div>
                        <div className="habit">
                          <p>👨🏻‍💻</p>
                          <p>{data}</p>
                        </div>
                        <div
                          className="tick"
                          style={{
                            background: 'var(--neutral-300)',
                          }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
      <FAB />
    </IonPage>
  );
}
export default Home;

function DateItem({ data }: { data: Date }) {
  return (
    <div className="scroll-item">
      <p>{data.toLocaleDateString('en-us', { weekday: 'short' })}</p>
      {data.toLocaleDateString() === new Date().toLocaleDateString() ? (
        <div className="current-date">
          <p
            className="bold"
            style={{
              color: 'var(--neutral-300)',
            }}
          >
            {data.toLocaleDateString('en-us', {
              day: 'numeric',
            })}
          </p>
        </div>
      ) : (
        <p
          className="bold"
          style={{
            color: 'var(--neutral-300)',
          }}
        >
          {data.toLocaleDateString('en-us', {
            day: 'numeric',
          })}
        </p>
      )}
    </div>
  );
}