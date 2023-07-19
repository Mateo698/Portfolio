import Image from 'next/image'
import styles from '../styles/Slide.module.css'

interface SlideProps {
    image: React.ReactNode,
    title: string,
    description: string
}

export default function(props: SlideProps){
    return(
        <div className={styles.cardContainer} >
            <div className={styles.imageContainer}>
                {props.image}
            </div>
            <div className={styles.information}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    )
}