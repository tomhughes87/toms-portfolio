import React from 'react'
import {Logo} from './Logo'
import './style.css'

export default function Skills ()  {


    const allTechSkills = [
        'Typescript','React','HTML','CSS','Javascript','Python','Jest',
        'GitHub','Git','Mongodb','Node.js','Flask','WebPack','PostgreSQL','Express','Docker','Django','Redux']

    const techSkillsTop = [
        'Typescript','React','HTML','CSS','Javascript','Python','Jest',
        'GitHub','Git',]
    const techSkillsMid = ['Mongodb','node.js','Flask']
    const techSkillsLow = ['WebPack','PostgreSQL','Express','Docker','Django','Redux']

    let techSkillsList = []
    techSkillsTop.forEach((item,index) => {
        techSkillsList.push(
        <Logo
            key={index}
            tech={item}
            path={`/images/skills/${item}.svg`}
            // tier={'gold'}
        />)
    })

    let midTechSkillsList = []
    techSkillsMid.forEach((item,index) => {
        midTechSkillsList.push(
        <Logo
            key={index}
            tech={item}
            path={`/images/skills/${item}.svg`}
            // tier={'silver'}
        />)
    })

    let lowTechSkillsList = []
    techSkillsLow.forEach((item,index) => {
        lowTechSkillsList.push(
        <Logo
            key={index}
            tech={item}
            path={`/images/skills/${item}.svg`}
            // tier={'bronze'}
        />)
    })

    
    let allTechSkillsList = []
    allTechSkills.forEach((item,index) => {
        allTechSkillsList.push(
        <Logo
            key={index}
            tech={item}
            path={`/images/skills/${item}.svg`}
            // tier={'silver'}
        />)
    })

  return (
    <div className="container skills-wrapper rounded p-3">
        {/* <hr width='100%'></hr> */}
        {/* <br></br> */}
        <br></br>
        <div className="skill-logos gold">
            {/* <h2 id='skillCardTitle'>Top Skills</h2> */}
            {/* <br></br> */}
            {techSkillsList}
        </div>
        <br></br>
        <br></br>
        {/* <br></br> */}

        {/* <hr width='100%'></hr> */}
        {/* <h2>Mid Skills</h2> */}
        <div className="skill-logos silver">
        {midTechSkillsList}
        </div>

        {/* <hr width='100%'></hr> */}
        {/* <h2>Some Skills</h2> */}
        <br></br>
        <br></br>
        {/* <br></br> */}
        <div className="skill-logos bronze">
        {lowTechSkillsList}
        </div>

         {/* <hr width='100%'></hr> */}
        {/* <h2>Some Skills</h2> */}
        <br></br>
        <br></br>
        {/* <br></br> */}
        <div className="skill-logos white">
        {allTechSkillsList}
        </div>


    </div>

  )
}
