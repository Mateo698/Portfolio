import styles from '../styles/Page.module.css';
import Profile from '../public/ProfileLowerRes.jpg';
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from 'react-icons/rx';

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h2 className={styles.text1}>Hi!</h2>
                <h1 className={styles.text2}> I'm Mateo Rada</h1>
                <h3 className={styles.text1}>Software System Engineer, student at ICESI University</h3>
                <div className={styles.social}>
                    <div className={styles.buttonContainer}>
                        <button className={styles.socialButton} onClick={() => window.open('https://www.linkedin.com/in/mateo-rada-arias-b44503239/')}>
                            <RxLinkedinLogo size={40} />
                        </button>
                        <button className={styles.socialButton} onClick={() => window.open('https://github.com/Mateo698')}>
                            <RxGithubLogo size={40} />
                        </button>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.resumeButton}>
                            <p style={{ fontSize: 20, fontWeight: 'lighter', margin: 0 }}>Resume</p>
                        </button>
                    </div>
                </div>
                
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={Profile.src} alt="Profile" height={500} />
            </div>
        </div>
    )
}