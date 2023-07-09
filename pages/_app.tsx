import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import type { AppProps } from 'next/app'
import Page from '../components/Page'
import Test from '../components/Test'
import { useState } from 'react'

const sections = [
  {title: "About"},
  {title: "Projects"},
  {title: "Skills"},
  {title: "Contact"}
]

function MyApp({ Component, pageProps }: AppProps) {
  const [page, setPage] = useState(0)

  const changePage = (newPage: number, setActive: (newActive: number) => void) => {
    setPage(newPage)
    setActive(newPage)
    console.log(page)
  }

  function renderSwitch(param:number) {
    switch(param) {
      case 0:
        return <Test/>;
      default:
        return <Page/>;
    }
    
  }

  return (
    <div style={{display: "flex", flexDirection: "row",width:"calc(100%)",height:"calc(100%)"}}>
      <Sidebar sections={sections} changePage={changePage}/>
      {renderSwitch(page)}
    </div>
  )


}

export default MyApp
