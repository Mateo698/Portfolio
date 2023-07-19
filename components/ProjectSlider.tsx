import Slide from "./Slide"
import Image from "next/image"
import { useState } from "react"
import styles from "../styles/ProjectSlider.module.css"
import logo from "../public/logo.jpg"

const imageStyle = {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    borderRadius: '15px 0px 0px 15px'
}

const projects = [
    {
        image: <img src={logo.src} style={{objectFit: 'cover',
        height: '100%',
        width: '100%',
        borderRadius: '15px 0px 0px 15px'}} />,
        title: "Syri a la mano",
        description: "Syri a la mano fue una aplicacion pensada para oficina de Multimedios en la que se podia ver el estado del trafico en la ciudad de Monterrey, Nuevo Leon, Mexico. La aplicacion se desarrollo en React Native y se utilizo la API de Google Maps para obtener los datos de trafico."
    }
    , {
        image: <img src={logo.src} style={{objectFit: 'cover',
        height: '100%',
        width: '100%',
        borderRadius: '15px 0px 0px 15px'}} />,
        title: "E-Shop",
        description: ""
    }]

const slides = projects.map((project) => {
    return (
        <Slide image={project.image} title={project.title} description={project.description} />
    )
}
)


export default function ProjectSlider() {
    const [currentSlide, setCurrentSlide] = useState(slides[0])

    function changeSlide(direction: string) {
        let index = slides.indexOf(currentSlide)
        if (direction == "up") {
            if (index == 0) {
                setCurrentSlide(slides[slides.length - 1])
            } else {
                setCurrentSlide(slides[index - 1])
            }
        } else {
            if (index == slides.length - 1) {
                setCurrentSlide(slides[0])
            } else {
                setCurrentSlide(slides[index + 1])
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowUp} onClick={() => changeSlide("up")}></div>
            {currentSlide}
            <div className={styles.arrowDown} onClick={() => changeSlide("down")}></div>
        </div>
    )
}