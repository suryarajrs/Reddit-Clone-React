import Nav from "../Components/Nav-Components/Nav"



const Layout =({children})=>{



    return(
        <>
        <Nav></Nav>
        {children}
        </>
    )
}

export default Layout