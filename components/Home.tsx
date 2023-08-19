import styles from '../styles/Page.module.css';
import Profile from '../public/ProfileLowerRes.jpg';
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from 'react-icons/rx';
import Image from 'next/image';


export default function Page() {

    const handleClick = () => {
        fetch('HV.pdf').then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            });
        });
    }


    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h2 className={styles.text1}>Hi!</h2>
                <h1 className={styles.text2}> I&apos;m Mateo Rada</h1>
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

                        <button className={styles.resumeButton} onClick={handleClick}>
                            <p style={{ fontSize: 20, fontWeight: 'bold', margin: 0, fontFamily: 'Nunito' }}>Resume</p>
                        </button>


                    </div>
                </div>

            </div>
            <div className={styles.imageContainer}>

                <Image
                    src='/ProfileLowerRes.jpg'
                    alt="Project Image"
                    quality={100}
                    layout="responsive"  // Use responsive layout to maintain aspect ratio
                    width={300}          // Set an appropriate width
                    height={300}         // Set an appropriate height
                    objectFit="cover"
                    priority={true}
                    className={styles.image}
                    
                />

            </div>
        </div>
    )
}