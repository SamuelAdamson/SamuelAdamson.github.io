// FADE ON SCROLL CONTAINER -- DOES NOT FADE OUT -- All pages
// Author: Samuel Adamson
// Intersection Observers
import { useInView } from 'react-intersection-observer';

// Check if faded in once
let fadedIn = false;

const ScrollFadeLone = ({ props }) => {
    // Threshold
    let thresh = 0.4;
    if (window.innerWidth < 720) thresh = 0.125;

    // Intersection Observer
    const { ref, inView } = useInView({
        threshold: thresh
    })

    // Update faded in boolean
    if(inView) fadedIn = inView;

    return (
        <div ref={ ref } className={ inView || fadedIn ? 'ScrollFade show' : 'ScrollFade' }>
            { props }
        </div>
    );
}

export default ScrollFadeLone;