import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';

// á, é, í, ó, ú
const dateItems = [
    {
        date: 'Miercoles 7 de Diciembre 2022',
        content: `
    <p>11:00 am. En Mensaje a la Nación, <b>Pedro Castillo disuelve el Congreso</b>.</p>
    <p>Las Fuerzas Armadas rechazan apoyar la orden de Castillo.</p>
    <p>La Mesa Directiva del Congreso llamó a sesión para adelatar la votación de la vacancia que se tenía programada para las 3:00 pm.</p>
    <p>1:00 pm. El Congreso somete a votación la <b>vacancia de Castillo</b> que es aprobado por 101 votos, aunque sin respetar el proceso legal.</p>
    <p>Pedro Castillo es detenido por su propia escolta.</p>
    <p>La vicepresidenta <b>Dina Boluarte jura como Presidenta</b>, indicando que se mantendrá hasta el 2026, es decir todo el periodo que le correspondía a Castillo.</p>
    <p>Se dan las primeras protestas en Lima y otras ciudades.</p>
    `,
        more: false
    }, {
        date: 'Jueves 8 de Diciembre 2022',
        content: `
    <p>Estados Unidos reconoce el gobierno de Boluarte, mientras que México, Colombia, Bolivia y Argentina lo desconocen.</p>
    <p>La fiscalía <b>denuncia a Pedro Castillo por rebelión</b> y ordenan su detención preventiva por 7 días.</p>
    <p>Se dan <b>protestas contra Boluarte y el Congreso</b> en distintos lugares del país. En Arequipa, Andahuaylas, Canchis y Puno las protestas son masivas y se dan bloqueos.</p>
    `
    }, {
        date: 'Viernes 9 de Diciembre 2022',
        content: `
    <p>Las protestas se extienden por el país, hay <b>bloqueo de carreteras</b> as sur y al norte.</p>
    <p>Las demandas principales son: <b>Cierre del congreso, rechazo al gobierno de Dina Boluarte, libertad de Pedro Castillo, nuevas elecciones y Asamblea Constituyente</b>.
    `,
        more: false
    }, {
        date: 'Sabado 10 de Diciembre 2022',
        content: `
    <p>Dina Boluarte juramenta su nuevo gabinete encabezado por el ex fiscal Pedro Angulo. Es un <b>gabinete de tendencia derechista y ligado al fujimorismo</b>.</p>
    <p>Prosiguen las protestas. Se suman las centrales sindicales.</p>
    `,
        more: false
    },
    {
        date: 'Domingo 11 de Diciembre 2022',
        content: `
    <p>Manifestantes de la provincia de <b>Andahuaylas</b> intentan tomar el aeropuerto local, la policía les dispara hiriendo a varios y <b>matando a dos jóvenes</b>:</p>
    <ol>
      <li>Beckhan Romario Quispe Garfias (18)</li>
      <li>David Atequipa Quispe (15)</li>
    </ol>
    <p>Las principales organizaciones del pais convocan un <b>paro nacional</b>.</p>
    `,
        more: false
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
    `,
        more: false
    },
]

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Header />,
//     },
//     {
//         path: "/",
//         element: <Home dateItems={dateItems} />,
//     },
//     {
//         path: "/contact",
//         element: <Contact />,
//     }
// ]);

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home dateItems={dateItems} />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
