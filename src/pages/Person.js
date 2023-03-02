import { useParams } from 'react-router-dom'

import "./Persons.scss"

function Person({ individuals }) {
    const { userId } = useParams();
    return (
        <section className="persons-container">
            <div className="container flex-grid">
                The User {userId}
            </div>
        </section>
    );
}

export default Person;