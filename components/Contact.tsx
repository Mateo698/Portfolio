import styles from '../styles/Conctact.module.css';

export default function Page() {
    return (
        <div className={styles.container}>
            <h1>Contact</h1>
            <a href="mailto:mateora73@gmail.com">
                <button className={styles.resumeButton} style={{ fontSize: 20, fontWeight: 'bold', margin: 0 }}>Contact</button>
            </a>

        </div>
    )
}