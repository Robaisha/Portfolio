import React from 'react'
import Certification from './cert';
import interns from '../Picture/interns.png'
import TCF from '../Picture/TCF.png'
import Coursera from '../Picture/Coursera.png';


export default function About() {
  
  let desc = "Front End Web Development Using  HTML & HTML5, CSS, CSS3 Flex & Bootstrap, JavaScript, ES6 & jQuery,PHP,WordPress Project";
  let desc1 = "Volunteer Certificate for the Citizen Foundation summer camp 2019";
  let desc2 = "Programming Fundamental Course Using C Language";
  
  
  return (
        <div>
            <h1 style={{textAlign:'center',fontFamily: "Poppins, sans-serif",fontSize:45,textTransform:'uppercase',textDecoration:'underline'}}>Certifications</h1>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                <div className='cert'>
                    <Certification pic={interns} title="Front-End Web Development By Interns.pk" description={desc} />
                    <Certification pic={TCF} title="The Citizen Foundation" description={desc1} />
                    <Certification pic={Coursera} title="Duke University Coursera" description={desc2} />
                </div>
                
            </div>
        </div>
    )
}
