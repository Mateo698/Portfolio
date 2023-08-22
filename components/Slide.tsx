import Image from 'next/image'
import styles from '../styles/Slide.module.css'

interface SlideProps {
    image: string,
    title: string,
    description: string,
    link: string
}

export default function Slide(props: SlideProps) {
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
}