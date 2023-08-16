import Slide from "./Slide"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import styles from "../styles/ProjectSlider.module.css"
import logo from "../public/logo.jpg"
import syri from "../public/syri.png"
import eShop from "../public/eshop.png"
import competitiva from "../public/competitiva.png"
import projectData from "../data/projects.json"

interface Project {
    image: string,
    title: string,
    description: string,
    link: string
}


const slides = projectData.map((project, index) => {
    return (
        <Slide key={index} image={project.imageSrc} title={project.title} description={project.description} link={project.link} />
    )
}
)


export default function ProjectSlider() {
    /* eslint-disable */
    const [index, setIndex] = useState(0)
    const refs = slides.map(() => useRef<HTMLDivElement>(null))




    function changeSlide(direction: string) {
        if (direction === "up") {
            if (index == 0) {
                refs[slides.length - 1].current?.scrollIntoView({ behavior: "smooth" })
                setIndex(slides.length - 1)
            } else {
                refs[index - 1].current?.scrollIntoView({ behavior: "smooth" })
                setIndex(index - 1)
            }
        } else {
            if (index === 0) {
                refs[1].current?.scrollIntoView({ behavior: "smooth" })
                setIndex(1)
            } else if (index === slides.length - 1) {
                refs[0].current?.scrollIntoView({ behavior: "smooth" })
                setIndex(0)
            } else {
                refs[index + 1].current?.scrollIntoView({ behavior: "smooth" })
                setIndex(index + 1)
            }
        }

    }



    return (
        <div className={styles.container}>
            <div className={styles.arrowLeft} onClick={() => changeSlide("up")}></div>
            <div className={styles.slideContainer}>
                {slides.map((slide, index) => {
                    return (
                        <div key={index} className={styles.slide} ref={refs[index]}>
                            {slide}
                        </div>
                    )
                })
                }
            </div>
            <div className={styles.arrowRight} onClick={() => changeSlide("down")}></div>
        </div>
    )
}