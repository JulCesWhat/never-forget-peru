import { useSearchParams, useNavigate } from 'react-router-dom'

import "./Persons.scss"

function Persons({ individuals }) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const date = searchParams.get('date') ?? ''

    let individualsArr = Object.values(individuals)
    // filter date
    if (date) {
        individualsArr = individualsArr.filter((indiv) => {
            return indiv.deathDate === date;
        });
    }
    const handleMoreClick = (path) => {
        navigate(path);
    }

    return (
        <section className="persons-container">
            <div className="container flex-grid">

                {
                    individualsArr.length ? ( individualsArr.map((per) => {
                        return (
                            <div key={per.id} className="persons-item col">
                                <div className="persons-img-header">
                                    <h2>{per.name}</h2>
                                </div>
                                {/* <div className="date">10 JULY 2016</div> */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                                <a className="bnt-more" onClick={() => handleMoreClick(`/person/${per.id}`)}>Mas Detalles</a>
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