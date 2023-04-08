import { Outlet } from "react-router-dom"
import { MemoFooter } from "./footer"
import { MemoHeader } from "./header"


export const Layout = () =>{

    return(
    <>
    <MemoHeader/>
    {/* <FirstContext.Provider value={valueForContext1}> */}
        <Outlet />
    {/* </FirstContext.Provider> */}
    <MemoFooter />
    </>
    )
}