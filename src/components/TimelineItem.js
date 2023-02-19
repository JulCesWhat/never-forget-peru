import React from "react";

import { ScrollReveal } from './ScrollReveal';

export function TimelineItem({
    direction: direction = '',
    date: date,
    content: content,
    more: more = false
}) {

    return (
        <div className="timeline-item">
            <div className="timeline-img"></div>

            <ScrollReveal classNames="timeline-content"
                direction={direction}>
                {/* <h2>Title</h2> */}
                <div className="date">{date}</div>
                <div className="content-body" dangerouslySetInnerHTML={{ __html: content }}></div>
                {
                    more && (
                        <a className="bnt-more">More</a>
                    )
                }
            </ScrollReveal>
        </div>
    )
}