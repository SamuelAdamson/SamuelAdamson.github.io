// DYNAMIC CONTAINER -- All pages
// Author: Samuel Adamson
// Intersection Observers
import { useInView } from 'react-intersection-observer';

const Dyno = ({ thresh, props }) => {
    // If view width is less than < 720 make thresh 0 
    if(window.innerWidth < 720) {
        thresh = 0.05;
    }

    // Intersection Observer
    const { ref, inView } = useInView({
        threshold: thresh
    });

    return (
        <div className="dyno-wrapper">
            <div ref={ ref }  className={ inView ? 'Dyno in-view' : 'Dyno' }>
                <div className={ inView ? 'dyno-content show' : 'dyno-content' }>
                    { props }
                </div>
            </div>
        </div>
    );
}

export default Dyno;