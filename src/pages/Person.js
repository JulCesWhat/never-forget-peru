import { useParams } from 'react-router-dom'

import "./Person.scss"

function Person({ individual }) {
    return (
        <section className="person-container">
            <div className="container">
                <div class="person-card">
                    <div class="person-img-header">
                        <h2>Card Title</h2>
                    </div>
                    <div class="date">30 JULY 2016</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                </div>
            </div>
        </section>
    );
}

export default Person;