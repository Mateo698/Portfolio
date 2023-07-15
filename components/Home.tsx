import styles from '../styles/Page.module.css';

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h1>Mateo Rada</h1>
                <h3 style={{fontWeight:'lighter', width:'350px'}}>Software System Engineer, student at ICESI University</h3>
            </div>
            <div className={styles.image}>
            </div>
        </div>
    )
}