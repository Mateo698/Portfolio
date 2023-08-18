import styles from '../styles/Conctact.module.css';
import { BiLogoGmail } from 'react-icons/bi';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { BiPhone } from 'react-icons/bi';

export default function Page() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contact</h1>
            <div className={styles.socialsContainer}>
                <a href='mailto:mateora73@gmail.com'>
                    <div className={styles.socialItem}>
                        <BiLogoGmail size={40} color='black' onClick={() => window.open('mailto:mateora73@gmail.com')} />
                        <p className={styles.socialText}>
                            mateora73@gmail.com
                        </p>
                    </div>
                </a>
                <div className={styles.socialItem} onClick={() => window.open('https://www.instagram.com/odd_eyes.698/')}>
                    <BiLogoInstagramAlt size={40} color='black' />
                    <p className={styles.socialText}>
                        @odd_eyes.698
                    </p>
                </div>
                <div className={styles.socialItem} onClick={() => window.open('https://wa.me/573205785410')}>
                    <BiPhone size={40} color='black' />
                    <p className={styles.socialText}>
                        +57 320 578 54 10
                    </p>
                </div>
            </div>
        </div>
    )
}