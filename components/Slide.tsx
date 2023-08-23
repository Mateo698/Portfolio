import Image from 'next/image'
import styles from '../styles/Slide.module.css'
import React from 'react'

interface SlideProps {
    image: string,
    title: string,
    description: string,
    link: string,
    tech: string[]
}

export default function Slide(props: SlideProps) {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 700;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    if (width > breakpoint) {
        return (
            <div className={styles.cardContainer} onClick={() => window.open(props.link)}>
                <div className={styles.imageContainer}>
                    <Image
                        src={props.image}
                        alt="Project Image"
                        priority={true}
                        fill={true}
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
                <div className={styles.information}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.cardContainer} onClick={() => window.open(props.link)}>
                <div className={styles.imageContainer}>
                    <Image
                        src={props.image}
                        alt="Project Image"
                        priority={true}
                        fill={true}
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
                <h3 className={styles.title}>
                    {props.title}
                </h3>
                <div className={styles.technologies}>
                    {props.tech.map((tech, index) => {
                        return (
                            <div key={index} className={styles.techTag}>
                                <p className={styles.tech}>{tech}</p>
                            </div>
                        )
                    })
                    }
                </div>
                <button className={styles.aboutBttn}>
                    <p style={{ fontSize: 20, fontWeight: 'bold', margin: 0, fontFamily: 'Nunito' }}>About</p>
                </button>
                <div className={styles.information}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>
        )
    }
}