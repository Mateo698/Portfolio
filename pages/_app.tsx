import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import type { AppProps } from 'next/app'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

import { useState } from 'react'
import {GoHome} from 'react-icons/go';
import {GoGitPullRequest} from 'react-icons/go';
import {GoMortarBoard} from 'react-icons/go';
import {GoMail} from 'react-icons/go';

const iconSize = "20px"

const sections = [
  {title: "About", icon: <GoHome size={iconSize} />},
  {title: "Projects", icon: <GoGitPullRequest size={iconSize}/>},
  {title: "Skills", icon: <GoMortarBoard size={iconSize}/>},
  {title: "Contact", icon: <GoMail size={iconSize}/>}
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
        return <Home/>;
      case 1:
        return <Projects/>;
      case 2:
        return <Skills/>;
      case 3:
        return <Contact/>;
      default:
        return <Home/>;
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
