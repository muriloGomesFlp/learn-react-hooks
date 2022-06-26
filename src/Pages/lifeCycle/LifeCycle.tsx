import {Container, Segment} from "semantic-ui-react"
import {TemplatePage, FooterTemplate} from "../index"



const LifeCycle = () => {

    return (
      
        <Container fluid className='App-header'>
            <TemplatePage/>
                <Container>
                <Segment>Text About React LifeCycle</Segment>
                </Container>
                <FooterTemplate/>
            </Container>
    )
}

export default LifeCycle
