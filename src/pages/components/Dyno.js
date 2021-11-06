// DYNAMIC CONTAINER -- All pages
// Author: Samuel Adamson
// Intersection Observers
import { useInView } from 'react-intersection-observer';

const Dyno = ({ thresh, props }) => {
    // Intersection Observer
    const { ref, inView } = useInView({
        threshold: thresh
    });

    return (
        <div className="dyno-wrapper">
            <div ref={ ref }  className={ inView ? 'Dyno in-view' : 'Dyno' }>
                { props }        
            </div>
        </div>
    );
}

export default Dyno;