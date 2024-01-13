import { Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Today from "./Today"
import Tomorrow from "./Tomorrow"

const ResultsPage = () => {
    const params = useParams()
    return(
        <>
        <Container className="results-container w-100 m-0">
            <Row className="full-width mt-5">
                {/* <Today cityName={params.elementId.toUpperCase()}/> */}
            </Row>
            <Row className="full-width mt-5">
                <Tomorrow cityName={params.elementId.toUpperCase()}/>
            </Row>
        </Container>
        </>
    )
}

export default ResultsPage