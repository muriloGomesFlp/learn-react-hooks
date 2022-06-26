import { Link } from "react-router-dom"
import {Container, Segment} from "semantic-ui-react"
import {TemplatePage, FooterTemplate} from "../index"



const About = () => {

    return (
      
        <Container fluid className='App-header'>
        <TemplatePage/>
            <Container>
            <Segment>Text About ME</Segment>
            </Container>
            <FooterTemplate/>
        </Container>
    )
}

export default About
