import { useParams } from 'react-router-dom'

import "./Persons.scss"

function Person({ individuals }) {
    const { id } = useParams();
    return (
        <section className="persons-container">
            <div className="container flex-grid">
                The User {id}
            </div>
        </section>
    );
}

export default Person;