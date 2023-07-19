import styles from '../styles/Projects.module.css';
import ProjectSlider from './ProjectSlider';

export default function Page() {
    return (
        <div className={styles.container} >
            <h1 style={{marginBottom:'1vh'}}>Projects</h1>
            <ProjectSlider/>
        </div>
    )
}