import logo from './logo.svg';
import './App.css'
import {TemplatePage, FooterTemplate} from './Pages/index'
import {Container, Grid, Image, Segment} from 'semantic-ui-react';

function App() {
    return (
        <Container fluid className='App-header'>
            <TemplatePage/>
            <Container>
                <Grid centered columns="1">
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>Brief Text...</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <img src={logo}
                            className='App-logo'/>
                    </Grid.Row>
                </Grid>
            </Container>
            <FooterTemplate/>
        </Container>

    )
}

export default App;
