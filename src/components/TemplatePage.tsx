import {useReducer, useEffect} from 'react'
import {
    Menu,
    Container,
    Segment,
    Dropdown,
    Icon,
    Label
} from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'
import {TemplatePageTypes, TemplateLocalAction} from '../Types/AllTypes'


const localReducer = (localState : any, localAction : TemplateLocalAction) => {
    
    switch (localAction.type) {
        case 'SET_CHANGE_MENU':
            return {
                activeItem: localState.activeItem = localAction.value
            }
        default:
            return localState
    }
}

export const _initialValues = {
    activeItem: ''
}

const TempaltePage = () => {
    let navigate = useNavigate();

    const [localState, localDispatch] = useReducer(localReducer, _initialValues)
    const handleItemClick = (e : any, {name} : any) => {
        localDispatch({type: "SET_CHANGE_MENU", value: name})
        navigate(name);
    }

    return (
        <Menu>
            <Menu.Item header>React Explanation Hooks</Menu.Item>
            <Menu.Item name='/'
                active={
                    localState.activeItem === '/'
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
                    localState.activeItem === 'lifeCycle'
                }
                onClick={handleItemClick}>
                Life Cycle
            </Menu.Item>
            <Menu.Item name='language'
                active={
                    localState.activeItem === 'language'
                }
                onClick={handleItemClick}>
                Language
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item name='about'
                    active={
                        localState.activeItem === 'about'
                    }
                    onClick={handleItemClick}>
                    About Me
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default TempaltePage
