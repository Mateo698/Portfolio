import Slide from "./Slide"
import { useState, useRef, useEffect } from "react"
import styles from "../styles/ProjectSlider.module.css"
import projectData from "../data/projects.json"
import React from "react"

interface Project {
    image: string,
    title: string,
    description: string,
    link: string
}


const slides = projectData.map((project, index) => {
    return (
        <Slide key={index} image={project.imageSrc} title={project.title} description={project.description} link={project.link} tech={project.technologies}/>
    )
}
)


export default function ProjectSlider() {
    /* eslint-disable */
    const [index, setIndex] = useState(0)
    const refs = slides.map(() => useRef<HTMLDivElement>(null))
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

    if (width > breakpoint) {
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
    } else {
        return (
            <div className={styles.container}>
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
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%",
                    border: "2px solid green"

                }}>
                    <div className={styles.arrowLeft} onClick={() => changeSlide("up")}></div>
                    <div className={styles.arrowRight} onClick={() => changeSlide("down")}></div>

                </div>
            </div>
        )
    }

}