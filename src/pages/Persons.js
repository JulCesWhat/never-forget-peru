import { useSearchParams } from 'react-router-dom'

import "./Persons.scss"

function Persons({ individuals }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const date = searchParams.get('date') ?? ''
    const userId = searchParams.get('user') ?? ''
    console.log('==->', date, userId)

    const individualsArr = Object.values(individuals);

    return (
        <section className="persons-container">
            <div className="container flex-grid">



                {
                    individualsArr.map((per) => {
                        return (
                            <div className="timeline-contents col">
                                <div className="date">3 JUN 2016</div>
                                <h2>Quote</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta explicabo debitis omnis dolor iste fugit totam quasi inventore!</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Persons;