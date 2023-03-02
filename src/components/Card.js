import React from "react";


export function Card({

}) {

    return (
        <div>
            <div className="content-body" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>

        // <div className="timeline-item">
        //     <div className="timeline-img"></div>

        //     <ScrollReveal classNames="timeline-content"
        //         direction={direction}>
        //         {/* <h2>Title</h2> */}
        //         <div className="date">{date}</div>
        //         <div className="content-body" dangerouslySetInnerHTML={{ __html: content }}></div>
        //         {
        //             more && (
        //                 <a className="bnt-more" onClick={handleMoreClick}>More</a>
        //             )
        //         }
        //     </ScrollReveal>
        // </div>
    )
}