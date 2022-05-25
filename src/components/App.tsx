import Secondtimer from './Secondtimer';
import Nextnumber from './Nextnumber';
import Menu from './Menu';
import Output from './Output';
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {



  return (
    <div className="content">
      <Container>
        <Row>
          <Col sm="2" className='navBar'>
            <Secondtimer />
            <hr/>
            <Nextnumber />
            <hr/>
            <Menu />
          </Col>
          <Col sm="10">
            <Output />
          </Col>
        </Row>
      </Container>




    </div>
  );
}


