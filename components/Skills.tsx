import styles from '../styles/Skills.module.css';
import skills from '../data/skills.json'
import Image from 'next/image';
import { useEffect, useState } from 'react';


const blank = () => {
    return (
        <div className={styles.contentContainer}>

        </div>
    )
}

const technicalSkills = () => {
    const data = skills.professional[0]
    return (
        <div className={styles.contentContainer}>
            <h2 style={{ fontWeight: 'lighter' }}>Programming Languages and Frameworks i&apos;m familiar with</h2>
            <div className={styles.skills}>
                {skills.technical.map((skill,index) => {
                    return (
                        <div className={styles.skillContainer} key={index}>
                            <div className={styles.skillImgContainer}>
                                <Image src={skill.imgSrc}
                                    alt={skill.name}
                                    quality={100}
                                    layout="responsive"  // Use responsive layout to maintain aspect ratio
                                    width={10}          // Set an appropriate width
                                    height={10}         // Set an appropriate height
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                            <div className={styles.skillNameContainer}>
                                <h3>{skill.name}</h3>
                            </div>
                        </div>
                    )
                }
                )}

            </div>
        </div>
    )
}

const professionalSkills = () => {
    return (
        <div className={styles.contentContainer}>
            <h2 style={{ fontWeight: 'lighter' }}>Software Engineering skills i&apos;ve acquired at ICESI University</h2>
            <div className={styles.skills}>
                {skills.professional.map((skill,index) => {
                    return (
                        <div className={styles.skillContainer} key={index}>
                            <div className={styles.skillImgContainer}>
                                <Image src={skill.imgSrc}
                                    alt={skill.name}
                                    quality={100}
                                    layout="responsive"  // Use responsive layout to maintain aspect ratio
                                    width={10}          // Set an appropriate width
                                    height={10}         // Set an appropriate height
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                            <div className={styles.skillNameContainer}>
                                <h3 style={{
                                    textAlign: 'center'
                                }}>{skill.name}</h3>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

const softSkills = () => {
    return (
        <div className={styles.contentContainer}>
            <h2 style={{ fontWeight: 'lighter' }}>Soft skills i&apos;ve acquired through out my personal and academic life</h2>
        </div>
    )
}


export default function Page() {
    const [page, setPage] = useState(0)
    const [changing, setChanging] = useState(styles.static)



    function renderSwitch(param: number) {
        switch (param) {
            case 0:
                return technicalSkills();
            case 1:
                return professionalSkills();
            case 2:
                return softSkills();
            default:
                return blank();
        }
    }

    const handlePageChange = (newPage: number) => {

        if (newPage == page) return
        setChanging(styles.changing)
        setTimeout(() => {
            setChanging(styles.static)
            setPage(newPage)
        }, 300);

    }

    return (
        <div className={styles.container}>
            <h1>Skills</h1>
            <div className={styles.buttonsContainer}>
                <button className={styles.skillButton} onClick={() => handlePageChange(0)}>Technical</button>
                <button className={styles.skillButton} onClick={() => handlePageChange(1)}>Professional</button>
                <button className={styles.skillButton} onClick={() => handlePageChange(2)}>Soft</button>
            </div>
            <div className={changing}>
                {renderSwitch(page)}
            </div>

        </div>
    )
}