import logo from '../../assets/logo.svg';
import {TemplatePage, FooterTemplate} from '../../Pages/index'
import {Container, Grid, Segment} from 'semantic-ui-react';


export const Home = () => {
    return(
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