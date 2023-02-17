import './App.css';
import { Header } from './components/Header';
import { TimelineItem } from './components/TimelineItem';

const dateItems = [
  {
    date: 'Miercoles 7 de Diciembre 2022',
    content: `
    <p>11:00 am. En Mensaje a la Nacion, Pedro Castillo disulve el Congreso.</p>
    <p>Las Fuerzas Armadas rechaza apoyar la order de Castillo.</p>
    <p>La Mesa Directiva del Congreso llamo a session para adelatar la votacion de la vacancia que se tenia programada para las 3:00 pm.</p>
    `
  }, {
    date: 'Jueves 8 de Diciembre 2022',
    content: `
    <p>Estados Unidos reconoce el gobierno de Boluarte, mientras que Mexico, Colombia, Bolivia y Argentina lo desconocen.</p>
    <p>La fiscalia denuncia a Pedro Castillo por rebelion y ordenan su detencion preventiva por 7 dias.</p>`
  }, {
    date: 'Viernes 9 de Diciembre 2022',
    content: `
    <p>Las protestas se extienden por el pais, hay bloqueos de carreteras as sur y al norte.</p>`
  }, {
    date: 'Sabado 10 de Diciembre 2022',
    content: `
    <p>Dina Boluarte juramenta su nuevo gabinete encabezado por el ex fiscal Pedro Angulo. Es un gabinete de tendencia derechista y ligado al fujimorismo.</p>`
  },
]

function App() {
    return (
        <div className="App">
            <Header />

            <section className="timeline">
                <div className="container">

                  {
                    dateItems.map((item, i) => {
                      return <TimelineItem
                        direction={i % 2 === 0 ? 'right' : 'left'}
                        date={item.date}
                        content={item.content} />
                    })
                  }

                    {/* <TimelineItem direction="right" />
                    <TimelineItem direction="left" />
                    <TimelineItem direction="right" />
                    <TimelineItem direction="left" />
                    <TimelineItem direction="right" />
                    <TimelineItem direction="left" />
                    <TimelineItem direction="right" />
                    <TimelineItem direction="left" /> */}


                    {/* <ScrollReveal>
            <TimelineItem />
          </ScrollReveal>
          <ScrollReveal>
            <TimelineItem />
          </ScrollReveal> */}

                    {/* <div class="timeline-item">

            <div class="timeline-img"></div>

            <div class="timeline-content timeline-card js--fadeInRight">
              <div class="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div class="date">25 MAY 2016</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a class="bnt-more" >More</a>
            </div>

          </div>

          <div class="timeline-item">

            <div class="timeline-img"></div>

            <div class="timeline-content js--fadeInLeft">
              <div class="date">3 JUN 2016</div>
              <h2>Quote</h2>
              <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo debitis omnis dolor iste fugit totam quasi inventore!</blockquote>
            </div>
          </div>

          <div class="timeline-item">

            <div class="timeline-img"></div>

            <div class="timeline-content js--fadeInRight">
              <h2>Title</h2>
              <div class="date">22 JUN 2016</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a class="bnt-more" >More</a>
            </div>
          </div>

          <div class="timeline-item">

            <div class="timeline-img"></div>

            <div class="timeline-content timeline-card js--fadeInLeft">
              <div class="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div class="date">10 JULY 2016</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a class="bnt-more" >More</a>
            </div>
          </div>

          <div class="timeline-item">

            <div class="timeline-img"></div>

            <div class="timeline-content timeline-card js--fadeInRight">
              <div class="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div class="date">30 JULY 2016</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a class="bnt-more" >More</a>
            </div>
          </div>

          <div class="timeline-item">

            <div class="timeline-img"></div>

            <div class="timeline-content js--fadeInLeft">
              <div class="date">5 AUG 2016</div>
              <h2>Quote</h2>
              <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo debitis omnis dolor iste fugit totam quasi inventore!</blockquote>
            </div>
          </div>

          <div class="timeline-item">

            <div class="timeline-img"></div>

            <div class="timeline-content timeline-card js--fadeInRight">
              <div class="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div class="date">19 AUG 2016</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a class="bnt-more" >More</a>
            </div>
          </div>

          <div class="timeline-item">

            <div class="timeline-img"></div>

            <div class="timeline-content js--fadeInLeft">
              <div class="date">1 SEP 2016</div>
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <a class="bnt-more" >More</a>
            </div>
          </div> */}



                </div>
            </section>

        </div>
    );
}

export default App;
