import Sidebar from "../components/Sidebar"
import Page from "../components/Page"
import styles from '../styles/Home.module.css'
import Test from "../components/Test"
import { useState } from "react"


interface IndexProps {
  page: number;
}

export default function Home(props: IndexProps) {
  const [page, setPage] = useState(0)
  return (
    <div className={styles.container}>
      {page === 0 ? <Test/> : <Page/>}
      
    </div>
  )
}


