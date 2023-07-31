import styles from '../styles/Skills.module.css';
import { useEffect, useState } from 'react';
import reactLogo from '../public/logos/react.webp';
import nextLogo from '../public/logos/next.png';
import cssLogo from '../public/logos/css.png';
import vueLogo from '../public/logos/vue.webp';
import htmlLogo from '../public/logos/html.png';
import jsLogo from '../public/logos/js.png';
import tsLogo from '../public/logos/ts.webp';
import nodeLogo from '../public/logos/node.png';
import pythonLogo from '../public/logos/python.webp';
import postgresLogo from '../public/logos/postgres.webp';
import firebaseLogo from '../public/logos/firebase.png';
import javaLogo from '../public/logos/java.png';
import scrumLogo from '../public/logos/scrum.webp';
import MVC from '../public/logos/mvc.png';
import Database from '../public/logos/database.png';
import versionControl from '../public/logos/github.png';
import linux from '../public/logos/linux.png';
import softwareArchitecture from '../public/logos/architecture.png';
import cloud from '../public/logos/cloud.png';
import docker from '../public/logos/docker.png';
import api from '../public/logos/api.png';
import problemsolving from '../public/logos/problemsolving.webp';
import teamwork from '../public/logos/teamwork.webp';


/* eslint-disable */
const technicalSkillsList = [
    {
        name: 'React',
        img: <img src={reactLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }}
        loading='eager'
         />
    },
    {
        name: 'NextJS',
        img: <img src={nextLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }
        } loading='eager'/>
    },
    {
        name: 'CSS',
        img: <img src={cssLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} loading='eager'/>
    },
    {
        name: 'Vue',
        img: <img src={vueLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} loading='eager'/>
    },
    {
        name: 'HTML',
        img: <img src={htmlLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} loading='eager'/>
    },
    {
        name: 'Javascript',
        img: <img src={jsLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} loading='eager'/>
    },
    {
        name: 'Typescript',
        img: <img src={tsLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} loading='eager'/>
    },
    {
        name: 'NodeJS',
        img: <img src={nodeLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} loading='eager'/>
    },
    {
        name: 'Python',
        img: <img src={pythonLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} loading='eager'/>
    },
    {
        name: 'PostgreSQL',
        img: <img src={postgresLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} loading='eager'/>
    },
    {
        name: 'Firebase',
        img: <img src={firebaseLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} loading='eager'/>
    },
    {
        name: 'Java',
        img: <img src={javaLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} loading='eager'/>
    },
]

const professionalSkillsList = [
    {
        name: 'Scrum',
        img: <img src={scrumLogo.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }
        } />
    },
    {
        name: 'MVC',
        img: <img src={MVC.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }} />
    },
    {
        name: 'Databases',
        img: <img src={Database.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }}/>
    },
    {
        name: 'Version Control',
        img: <img src={versionControl.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }}/>
    },
    {
        name: 'Linux',
        img: <img src={linux.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }}/>
    },
    {
        name: 'Software Architecture',
        img: <img src={softwareArchitecture.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }}/>
    },
    {
        name: 'Cloud Computing',
        img: <img src={cloud.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }}/>
    },
    {
        name: 'Dockers',
        img: <img src={docker.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }}/>
    },
    {
        name: 'APIs',
        img: <img src={api.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }}/>
    },
    {
        name: 'Problem Solving',
        img: <img src={problemsolving.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }}/>
    },
    {
        name: 'Teamwork',
        img: <img src={teamwork.src} style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            objectPosition: 'center'
        }}/>
    }
]

const blank = () => {
    return(
        <div className={styles.contentContainer}>

        </div>
    )
}

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
            <h2 style={{ fontWeight: 'lighter' }}>Software Engineering skills i&apos;ve acquired at ICESI University</h2>
            <div className={styles.skills}>
                {professionalSkillsList.map((skill) => {
                    return (
                        <div className={styles.skillContainer}>
                            <div className={styles.skillImgContainer}>
                                {skill.img}
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