import { Outlet } from "react-router-dom"
import { MemoFooter } from "./footer"
import { MemoHeader } from "./header"
// import { Main } from "./main"

export const Layout = () =>{
    return(
    <>
    <MemoHeader/>
    {/* <FirstContext.Provider value={valueForContext1}> */}
        <Outlet/>
    {/* </FirstContext.Provider> */}
    <MemoFooter/>
    </>
    )
}