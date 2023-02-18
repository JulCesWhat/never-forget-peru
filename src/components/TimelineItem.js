import React from "react";

import { ScrollReveal } from './ScrollReveal';

export function TimelineItem({
    direction: direction = '',
    date: date,
    content: content
}) {

    return (
        <div className="timeline-item">
            <div className="timeline-img"></div>

            <ScrollReveal classNames="timeline-content"
                direction={direction}>
                {/* <h2>Title</h2> */}
                <div className="date">{date}</div>
                <div className="content-body" dangerouslySetInnerHTML={{__html: content}}></div>
                <a className="bnt-more">More</a>
            </ScrollReveal>
        </div>
    )
}