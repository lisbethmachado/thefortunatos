import './App.css';
import Sign from './components/Sign'
import { Container } from './components/Grid'

function App() {
  return (
    <div className="App"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
    >
    <Container fluid size="sm-12 md-12">
      <Sign />
    </Container>
    </div>
  );
}

export default App;
