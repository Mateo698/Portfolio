import Sidebar from "../components/Sidebar"
import styles from '../styles/Home.module.css'

const sections = [
  {title: "About"},
  {title: "Projects"},
  {title: "Skills"},
  {title: "Contact"}
]

export default function Home(){
  return (
    <div className={styles.container}>
      <Sidebar sections={sections}/>
    </div>
  )
}


