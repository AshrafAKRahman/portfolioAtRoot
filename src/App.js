
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectCard } from './components/PrjoectCard';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <ProjectCard/>
      <Contact/>
    </div>
  );
}

export default App;
