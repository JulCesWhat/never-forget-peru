import React from "react";
import { useNavigate } from 'react-router-dom';

import { ScrollReveal } from './ScrollReveal';

export function TimelineItem({
    direction: direction = '',
    date,
    content,
    id,
    more: more = false
}) {
    const navigate = useNavigate();

    const handleMoreClick = () => {
        navigate(`/persons/${id}`);
    }

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
                        <a className="bnt-more" onClick={handleMoreClick}>More</a>
                    )
                }
            </ScrollReveal>
        </div>
    )
}