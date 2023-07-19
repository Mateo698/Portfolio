import Slide from "./Slide"
import Image from "next/image"
import { useState,useRef } from "react"
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
        image: <img src={logo.src} style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            borderRadius: '15px 0px 0px 15px'
        }} />,
        title: "Syri a la mano",
        description: "Syri a la mano fue una aplicacion web pensada para oficina de Multimedios en la que se podia administrar las aperturas, cierres y soportes requeridos en la Universidad ICESI, pensado para los empleados y monitores que requieren un manejo de la informacion mas eficiente y rapido. Hecha en NextJS y NodeJS",
        link: "https://github.com/Mateo698/Syri-A-La-Mano"
    }
    , {
        image: <img src={logo.src} style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            borderRadius: '15px 0px 0px 15px'
        }} />,
        title: "E-Shop Televisores",
        description: "Fue un proyecto final del curso Computacion en Internet la cual permitia la creacion de usuarios, compra de televisores y administracion de los mismos. Hecha en SpringBoot y NextJS con base de datos PostgreSQL",
        link: "https://github.com/IcesiComputacionInternet/TallerFinal/tree/Grupo_8"
    },
    {
        image: <img src={logo.src} style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            borderRadius: '15px 0px 0px 15px'
        }} />,
        title: "Red de programacion competitiva",
        description: "Fue un proyecto final del curso Proyecto Integrador 1 la cual permitia la administracion de usuarios, torneos e inscripciones de los estudiantes a los diferentes torneos. Hecha en NextJS y NodeJS con base de datos PostgreSQL",
        link: "https://github.com/redprogramacioncompetitiva/contests-management-system-2022-1"
    },    
        ]

const slides = projects.map((project, index) => {
    return (
        <Slide key={index} image={project.image} title={project.title} description={project.description} link={project.link} />
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
        getSlideStyle()
    }

    const getSlideStyle = () => {
        
    }


        return (
            <div className={styles.container}>
                <div className={styles.arrowUp} onClick={() => changeSlide("up")}></div>
                {currentSlide}
                <div className={styles.arrowDown} onClick={() => changeSlide("down")}></div>
            </div>
        )
    }