import {createContext, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LifeCycle, NotFound, About, Home} from './Pages/index'

const GlobalContextDef = {
    menuActive: '/',
    setMenuActive: (menuActive : string) => {}
}

export const GlobalContext = createContext(GlobalContextDef)

export const RoutesApp = () => {
    const [menuActive, setMenuActive] = useState(GlobalContextDef.menuActive)

    return (<GlobalContext.Provider value={{menuActive, setMenuActive}}>
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<Home/>}/>
                <Route path="lifeCycle"
                    element={<LifeCycle/>}/>
                <Route path="about"
                    element={<About/>}/>
                <Route path="*"
                    element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </GlobalContext.Provider>)
}
