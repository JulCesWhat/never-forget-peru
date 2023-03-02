import { useSearchParams } from 'react-router-dom'

import "./Persons.scss"

function Persons({ individuals }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const date = searchParams.get('date') ?? ''

    let individualsArr = Object.values(individuals)
    // filter date
    if (date) {
        individualsArr = individualsArr.filter((indiv) => {
            return indiv.deathDate === date;
        });
    }
    return (
        <section className="persons-container">
            <div className="container flex-grid">

                {
                    individualsArr.length ? ( individualsArr.map((per) => {
                        return (
                            <div key={per.id} className="timeline-contents col">
                                <div className="date">3 JUN 2016</div>
                                <h2>Quote</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo debitis omnis dolor iste fugit totam quasi inventore!</p>
                            </div>
                        )
                    })) : (
                        <div>No se encontro resultados para la fecha selecionada {date}</div>
                    )
                }
            </div>
        </section>
    );
}

export default Persons;