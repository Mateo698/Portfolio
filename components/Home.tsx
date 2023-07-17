import styles from '../styles/Page.module.css';
import Profile from '../public/ProfileLowerRes.jpg';
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from 'react-icons/rx';

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h2 style={{ fontWeight: 'lighter', width: '700px', fontSize: '50px', marginBottom: -50 }}>Hi!</h2>
                <h1 style={{ fontWeight: 'heavy', width: '700px', fontSize: '70px', marginBottom: -50 }}> I'm Mateo Rada</h1>
                <h3 style={{ fontWeight: 'lighter', width: '700px', fontSize: '50px' }}>Software System Engineer, student at ICESI University</h3>
                <div className={styles.social}>
                    <button className={styles.socialButton} onClick={() => window.open('https://www.linkedin.com/in/mateo-rada-ramirez-8b0b3a1b0/')}>
                        <RxLinkedinLogo size={50} />
                    </button>
                    <button className={styles.socialButton}>
                        <RxGithubLogo size={50} />
                    </button>

                </div>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={Profile.src} alt="Profile" height={500} />
            </div>
        </div>
    )
}