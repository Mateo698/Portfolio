import styles from '../styles/Skills.module.css';
import { useEffect, useState } from 'react';
import reactLogo from '../public/logos/react.png';
import nextLogo from '../public/logos/next.png';
import cssLogo from '../public/logos/css.png';
import vueLogo from '../public/logos/vue.png';
import htmlLogo from '../public/logos/html.png';
import jsLogo from '../public/logos/js.png';
import tsLogo from '../public/logos/ts.png';
import nodeLogo from '../public/logos/node.png';
import pythonLogo from '../public/logos/python.png';
import postgresLogo from '../public/logos/postgres.png';
import firebaseLogo from '../public/logos/firebase.png';
import javaLogo from '../public/logos/java.png';

/* eslint-disable */
const technicalSkillsList = [
    {
        name: 'React',
        img: <img src={reactLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
    {
        name: 'NextJS',
        img: <img src={nextLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }
        } />
    },
    {
        name: 'CSS',
        img: <img src={cssLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
    {
        name: 'Vue',
        img: <img src={vueLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
    {
        name: 'HTML',
        img: <img src={htmlLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
    {
        name: 'Javascript',
        img: <img src={jsLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
    {
        name: 'Typescript',
        img: <img src={tsLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
    {
        name: 'NodeJS',
        img: <img src={nodeLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
    {
        name: 'Python',
        img: <img src={pythonLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
    {
        name: 'PostgreSQL',
        img: <img src={postgresLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
    {
        name: 'Firebase',
        img: <img src={firebaseLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
    {
        name: 'Java',
        img: <img src={javaLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
]


const technicalSkills = () => {

    return (
        <div className={styles.contentContainer}>
            <h2 style={{ fontWeight: 'lighter' }}>Programming Languages and Frameworks i&apos;m familiar with</h2>
            <div className={styles.skills}>
                {technicalSkillsList.map((skill) => {
                    return (
                        <div className={styles.skillContainer}>
                            <div className={styles.skillImgContainer}>
                                {skill.img}
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
            prof
        </div>
    )
}

const softSkills = () => {
    return (
        <div className={styles.contentContainer}>
            soft
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
                return technicalSkills();
        }
    }

    const handlePageChange = (newPage: number) => {
        if(newPage == page) return
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