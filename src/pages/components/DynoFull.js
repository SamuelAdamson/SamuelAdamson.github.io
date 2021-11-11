// DYNAMIC CONTAINER FULL SCREEN -- All pages
// Author: Samuel Adamson
// Intersection Observers
import { useInView } from 'react-intersection-observer';

const DynoFull = ({ thresh, initialProp, props, foot }) => {
    // If view width is less than < 720 make thresh 0 
    if(window.innerWidth < 720) {
        thresh = 0;
    }

    // Intersection Observer
    const { ref, inView } = useInView({
        threshold: thresh
    });

    return (
        <div className="dyno-wrapper">
            <div ref={ ref }  className={ inView ? 'Dyno DynoFull in-view' : 'Dyno DynoFull' }>
                <div className={ inView ? 'dyno-content-full show' : 'dyno-content-full' } >
                    { initialProp }
                    {props.map((elem, index) => (
                        <div key={index}> 
                            { elem } 
                        </div>
                    ))}
                    { foot }
                </div>
            </div>
        </div>
    );
}

export default DynoFull;