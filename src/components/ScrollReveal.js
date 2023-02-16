import React, { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

import { useWindowDimensions } from "./../hooks/useWindowDimensions";
import "./ScrollReveal.scss";

export function ScrollReveal({ children, style, classNames, direction = "" }) {
    const sectionRef = useRef(null);
    const { _, width } = useWindowDimensions();

    useEffect(() => {
        if (sectionRef.current)
            if (width < 768) {
                scrollReveal().reveal(sectionRef.current, {
                    origin: "right",
                    distance: '300px',
                    easing: 'ease-in-out',
                    duration: 800
                });
            } else {
                var leftOrRigth = direction === "right" ? "left" : "right";
                
                scrollReveal().reveal(sectionRef.current, {
                    origin: leftOrRigth,
                    distance: '300px',
                    easing: 'ease-in-out',
                    duration: 800
                });
            }
    }, [width]);

    return (
        <div
            ref={sectionRef}
            style={style}
            className={classNames}
            data-testid="timeline-item"
        >
            {children}
        </div>
    );
};
