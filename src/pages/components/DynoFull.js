// DYNAMIC CONTAINER FULL SCREEN -- All pages
// Author: Samuel Adamson
// Intersection Observers
import { useInView } from 'react-intersection-observer';

const DynoFull = ({ thresh, initProp, props, foot }) => {
    // If view width is less than < 720 make thresh 0 
    if(window.innerWidth < 720) {
        thresh = 0.1;
    }

    // Intersection Observer
    const { ref, inView } = useInView({
        threshold: thresh
    });

    return (
        <div  ref={ ref } className="dyno-wrapper">
            <div className={ inView ? 'Dyno DynoFull in-view' : 'Dyno DynoFull' }>
                <div className="dyno-content-full">
                    <div className={ inView ? 'init-prop show' : 'init-prop' }>
                        { initProp }
                    </div>
                </div>
            </div>
            <div className="dyno-content-full-bottom">
                {props.map((elem, index) => (
                    <div key={index}> 
                        { elem } 
                    </div>
                ))}
                { foot }
            </div>
        </div>
    );
}

export default DynoFull;