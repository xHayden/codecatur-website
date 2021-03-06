import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gear from "../images/gear_640.png"

const projects = [
    {"url": "https://codedecatur.org/", "name": "Code Decatur", "author": "Hayden Carpenter", "redirect": false},
    {"url": "https://dev.dance", "name": "Portfolio Website", "author": "Hayden Carpenter"},
    {"url": "https://codedecatur.org/Karten/", "name": "Karten (Flashcards)", "author": "Hayden Carpenter", "redirect": false},
    {"url": "https://frc4026.com", "name": "Scout Janssen", "author": "Hayden Carpenter"},
    {"url": "http://cleverlynamedwebsite.pw/hexa", "name": "Hexa (Game)", "author": "Carter Semrad"},
    {"url": "http://cleverlynamedwebsite.pw/soccer/webSoccer/", "name": "Web Soccer (Game)", "author": "Carter Semrad"},
    {"url": "https://veryclevername3.github.io/DifferentialEquations/", "name": "Differential Equations Modeling", "author": "Carter Semrad"},
    {"url": "https://veryclevername3.itch.io/host", "name": "HOST (Game)", "author": "Carter Semrad"},
    {"url": "https://frc4026.com", "name": "Scout Janssen: Graphs and Statistics", "author": "Carter Semrad"},
    {"url": "", "name": "Outrospection RPG", "author": "Matias Devred", "redirect": false},
    {"url": "", "name": "Celsior (.casm Emulator)", "author": "Matias Devred", "redirect": false},
    {"url": "", "name": "ChASM (IDE and Compiler)", "author": "Matias Devred", "redirect": false},
    {"url": "", "name": "Celsior (.casm Emulator)", "author": "Colin Sandage", "redirect": false},
    {"url": "", "name": "ChASM (IDE and Compiler)", "author": "Colin Sandage", "redirect": false},
    {"url": "https://github.com/HSF-2003/Phalanx", "name": "Phalanx", "author": "Colin Sandage"},
    {"url": "https://github.com/MarkCangila/MnistPCAAutoEncoder", "name": "MNIST PCA Auto Encoder", "author": "Keon Sanavandi"},

]
let authorSections = {}
projects.map((data, index) => {
    if(authorSections[data.author] === undefined){
        authorSections[data.author] = [{"url": data.url, "name": data.name, "author": data.author, "redirect": data.redirect}]
    }
    else {
        authorSections[data.author].push({"url": data.url, "name": data.name, "author": data.author, "redirect": data.redirect})
    }
    return 0;
})

let authorSectionsArray = []
for(let key in authorSections){
    authorSectionsArray.push(authorSections[key])
}

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <div className="projects-frame nav-spacing">
        <center>
        <img src={Gear} alt="gear" style={{width: '100px', marginBottom: "50px"}}></img>
        </center>
        <h3>These projects have been created by Code Decatur members.</h3>
        <hr></hr>
        <table className="projects-table">
            {authorSectionsArray.map((data, index) => {
                return <tbody>
                    {data.map((project, index) => {
                        let target = "_blank"
                        if(project.redirect === false){
                            target = ""
                        }
                        if(index === 0){
                            return (
                            <tr>
                                <th rowSpan={data.length}>{project.author}</th>
                                <td><a target={target} rel="noreferrer" href={project.url}>{project.name}</a></td>
                            </tr>);
                        }
                        else {
                            return (
                            <tr>
                                <td><a target={target} rel="noreferrer" href={project.url}>{project.name}</a></td>
                            </tr>);
                        }
                    })}
                </tbody>
            })}
        </table>
        <br></br>
        <p>Ask and we'll add your project!</p>
    </div>
  </Layout>
)

export default ProjectsPage