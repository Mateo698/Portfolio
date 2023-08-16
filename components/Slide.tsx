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
        <div className={styles.cardContainer} style={{ cursor: 'pointer' }} onClick={() => window.open(props.link)}>
            <div className={styles.imageContainer}>
                <Image
                    src={props.image}
                    alt="Project Image"
                    quality={100}
                    layout="responsive"  // Use responsive layout to maintain aspect ratio
                    width={500}          // Set an appropriate width
                    height={300}         // Set an appropriate height
                    objectFit="cover"
                />
            </div>
            <div className={styles.information}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    )
}