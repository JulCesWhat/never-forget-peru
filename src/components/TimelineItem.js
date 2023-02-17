import React from "react";

import { ScrollReveal } from './ScrollReveal';

export function TimelineItem({ direction: direction = '' }) {

    return (
        <div className="timeline-item">
            <div className="timeline-img"></div>

            <ScrollReveal classNames="timeline-content"
                direction={direction}>
                <h2>Title</h2>
                <div className="date">1 MAY 2016</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                <a className="bnt-more">More</a>
            </ScrollReveal>
        </div>
    )
}