import '../styles/componentStyles/scrollbar.css';
import React, {useState} from 'react';
import { useScrollBarContext } from '../utils/contexts/scrollBarContext.tsx';

import {handleScrollToSection} from "../utils/scrollLogic.ts";

type scrollbarSectionProps = {
    id:string
}

const scrollbarSection = React.memo(({id}: scrollbarSectionProps) => {


    return(
        <div className="scrollbar-section"
            onClick={() => handleScrollToSection(id)}> {/*Could use some optimization*/}
        </div>
    );
});

export default function ScrollBar() {
    const [isHovered, setIsHovered] = useState<boolean | null>(null);
    const {scrollSections} = useScrollBarContext();

    const SetMouseHover = (segmentName?: string | null) => {
        setIsHovered(segmentName ?? null);
    };

    return (
        <div id="scrollbar" className="scrollbar-container" onMouseEnter={setIsHovered(true)}>
            <div className="scrollbar"></div>
        </div>
    );
}