import React from 'react'
import {Logo} from './Logo'
import './style.css'

export default function Skills ()  {


    const allTechSkills = [
        'Typescript','React','HTML','CSS','Javascript','Python','Jest',
        'GitHub','Git','Mongodb','Node.js','Flask','WebPack','PostgreSQL','Express','Docker','Django','Redux']

    
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
       
        <br></br>
        
        <div className="skill-logos white">
        {allTechSkillsList}
        </div>


    </div>

  )
}
