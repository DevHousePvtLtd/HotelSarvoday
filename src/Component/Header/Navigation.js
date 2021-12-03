import React,{useContext} from 'react';
import NavBar from "./NavBar";
import Menu from "./Menu";
import { MainContest } from '../store/Context';
export default function Navigation() {
    const Ctx = useContext(MainContest);
     

    return(
        <>
            <NavBar/>
            {console.log(Ctx.sideBar)}
            {
              Ctx.sideBar === true ? <Menu  /> : ''
            }
        </>
    )
}
