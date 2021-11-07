// FADE ON SCROLL CONTAINER -- All pages
// Author: Samuel Adamson
// Intersection Observers
import { useInView } from 'react-intersection-observer';

const ScrollFade = ({ props }) => {
    // Threshold
    let thresh = 0.4;
    if (window.innerWidth < 720) thresh = 0.125;

    // Intersection Observer
    const { ref, inView } = useInView({
        threshold: thresh
    })

    return (
        <div ref={ ref } className={ inView ? 'ScrollFade show' : 'ScrollFade' }>
            { props }
        </div>
    );
}

export default ScrollFade;