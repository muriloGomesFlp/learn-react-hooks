import {useContext} from 'react'
import {Menu, Dropdown} from 'semantic-ui-react'
import {useNavigate} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {GlobalContext} from '../Routes';


const TempaltePage = () => {
    const navegation = useNavigate()
    const {menuActive, setMenuActive} = useContext(GlobalContext)

    const handleItemClick = (e : any, {name} : any) => {
        setMenuActive(name)
        name === "home" ? navegation('/', {replace: true}) : navegation(`/${name}`, {replace: true})
    }

    return (<Menu>
        <Menu.Item header>React Explanation Hooks</Menu.Item>
        <Menu.Item name='home'
            active={
                menuActive === 'home'
            }
            onClick={handleItemClick}>
            Home
        </Menu.Item>
        <Dropdown item simple text='Hooks'>
            <Dropdown.Menu>
                <Dropdown.Header>Basic Hooks</Dropdown.Header>
                <Dropdown.Item>useState</Dropdown.Item>
                <Dropdown.Item>useEffect</Dropdown.Item>
                <Dropdown.Item>useContext</Dropdown.Item>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Header>Aditional Hooks</Dropdown.Header>
                <Dropdown.Item>useReducer</Dropdown.Item>
                <Dropdown.Item>useCallback</Dropdown.Item>
                <Dropdown.Item>useMemo</Dropdown.Item>
                <Dropdown.Item>useRef</Dropdown.Item>
                <Dropdown.Item>useImperativeHandle</Dropdown.Item>
                <Dropdown.Item>useLayoutEffect</Dropdown.Item>
                <Dropdown.Item>useId</Dropdown.Item>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Header>Less Usually</Dropdown.Header>
                <Dropdown.Item>useDebugValue</Dropdown.Item>
                <Dropdown.Item>useDeferredValue</Dropdown.Item>
                <Dropdown.Item>useTransition</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Menu.Item name='lifeCycle'
            active={
                menuActive === 'lifeCycle'
            }
            onClick={handleItemClick}>
            Life Cycle
        </Menu.Item>
        <Dropdown item simple text='Language'>
            <Dropdown.Menu>
                <Dropdown.Item>Portuguese</Dropdown.Item>
                <Dropdown.Item>English</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position='right'>
            <Menu.Item name='about'
                active={
                    menuActive === 'about'
                }
                onClick={handleItemClick}>
                About Me
            </Menu.Item>
        </Menu.Menu>
    </Menu>)

}

export default TempaltePage
