import { Footer } from "./footer"
import { Header } from "./header"
import { Main } from "./main"

export const Layout = () =>{
    return(
    <>
    <Header/>
    {/* <FirstContext.Provider value={valueForContext1}> */}
        <Main/>
    {/* </FirstContext.Provider> */}
    <Footer/>
    </>
    )
}