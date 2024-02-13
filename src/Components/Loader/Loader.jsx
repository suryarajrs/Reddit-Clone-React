
import './loader.css';
import Container from '@mui/material/Container';

function Loader() {
    return (
        <>
            <Container  sx={{ marginTop: 2 , display:"flex",justifyContent:"center" , alignItems:"center" , }}>

            <span className="loader"></span>

            </Container>
        </>
    )
}


export default Loader;