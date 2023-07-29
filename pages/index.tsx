import Sidebar from "../components/Sidebar"
import styles from '../styles/Home.module.css'
import { useState } from "react"


interface IndexProps {
  page: number;
}

export default function Home(props: IndexProps) {
  const [page, setPage] = useState(0)
  return (
    <div className={styles.container}>

      
    </div>
  )
}


