import styles from '../styles/Sidebar.module.css'
import { useState } from 'react';

class section {
    title: string;
    constructor(title: string) {
        this.title = title;
    }
}

interface SidebarProps {
    sections: section[];
    changePage: (newPage: number, setActive: (newActive: number) => void) => void;
}

export default function Sidebar(props: SidebarProps) {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.container}>
            {props.sections.map((section, index) => (
                <div key={index} className={styles.section} onClick={() => props.changePage(index,setActive)}>
                    <div className={styles.line} style={active === index ? { visibility: "visible" } : { visibility: "hidden" }}></div>
                    <div>
                        <h3>{section.title}</h3>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}