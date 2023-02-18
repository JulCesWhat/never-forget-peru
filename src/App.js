import './App.css';
import { Header } from './components/Header';
import { TimelineItem } from './components/TimelineItem';

// á, é, í, ó, ú
const dateItems = [
  {
    date: 'Miercoles 7 de Diciembre 2022',
    content: `
    <p>11:00 am. En Mensaje a la Nación, <b>Pedro Castillo disulve el Congreso</b>.</p>
    <p>Las Fuerzas Armadas rechaza apoyar la order de Castillo.</p>
    <p>La Mesa Directiva del Congreso llamó a sesión para adelatar la votación de la vacancia que se tenía programada para las 3:00 pm.</p>
    <p>1:00 pm. El Congreso somete a votación la <b>vacancia de Castillo</b> que es aprobado por 101 votos, aunque sin respetar el proceso legal.</p>
    <p>Pedro Castillo es detenido por su propia escolta.</p>
    `
  }, {
    date: 'Jueves 8 de Diciembre 2022',
    content: `
    <p>Estados Unidos reconoce el gobierno de Boluarte, mientras que México, Colombia, Bolivia y Argentina lo desconocen.</p>
    <p>La fiscalia <b>denuncia a Pedro Castillo por rebelión</b> y ordenan su detención preventiva por 7 dias.</p>`
  }, {
    date: 'Viernes 9 de Diciembre 2022',
    content: `
    <p>Las protestas se extienden por el pais, hay <b>bloqueos de carreteras</b> as sur y al norte.</p>
    <p>Las demandas principales son: <b>Cierre del congreso, rechazo al gobierno de Dina Boluarte, libertad de Pedro Castillo, nuevas elecciones y Asamblea Constituyente</b>.
    `
  }, {
    date: 'Sabado 10 de Diciembre 2022',
    content: `
    <p>Dina Boluarte juramenta su nuevo gabinete encabezado por el ex fiscal Pedro Angulo. Es un <b>gabinete de tendencia derechista y ligado al fujimorismo</b>.</p>
    <p>Prosiguen las protestas. Se suman las centrales sindicales.</p>
    `
  },
  {
    date: 'Domingo 11 de Diciembre 2022',
    content: `
    <p>Manifestantes de la provincia de Andahuaylas intentan tomar el aeropuerto local, la policia les dispara hiriendo a varios y matando a dos jovenes:</p>
    <ol>
      <li>Beckhan Romario Quispe Garfias (18)</li>
      <li>David Atequipa Quispe (15)</li>
    </ol>
    <p>Las principales organizaciones del pais convocan un <p>paro nacional</p>.
    `
  },
  {
    date: 'Lunes 12 de Diciembre 2022',
    content: `
    <p>Dina Boluarte presenta un proyecto de Ley para adelantar las <b>elecciones para abril del 2024</b>. Los manifestantes exigen que sea el 2023.</p>
    <p>En <b>Andahuaylas</b> crece la protesta tras las muertes del dia anterior. Nuevamente la <b>represión dispara al cuerpo</b>, matando a:</p>
    <ol>
      <li>Cristian Rojas Vásquez (19)</li>
      <li>R. P. M. L. (16)</li>
      <li>John Erik Enciso Arias (18)</li>
      <li>Wilfredo Lizarme Barboza (18)</li>
    </ol>
    <p>En <b>Arequipa</b> intentan tomar el aeropuerto y una comisaria, la represión produce 4 heridos y <b>un fallecio</b> por impacto de bala:</p>
    <ol>
      <li>Miguel Arcana (30)</li>
    </ol>
    <p>Toma de <b>local de la empresa Gloria</b> e incendio de vehículos.</p>
    <p>Decretan <b>estado de emergencia</b> en Ica, Arequipa y Apurimac.</p>
    <p>En <b>Cusco</b> intentan tomar el aeropuerto, se suspenden los vuelos.</p>
    `
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
