import styles from '../styles/Sidebar.module.css'
import { useState } from 'react';


class section {
    title: string;
    icon: any;
    constructor(title: string, icon: any) {
        this.title = title;
        this.icon = icon;
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
                    <div>
                        {section.icon}
                    </div>
                    
                </div>
            ))}
        </div>
    )
}