import {Contact} from './components/Contact';
import {Education} from './components/Education';
import {Experience} from './components/Experience';
import {Main} from './components/Main';
import {Projects} from './components/Projects';
import {Skills} from './components/Skills';


function App() {
  return (
    <div className='bg-white'>
      <Main/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )

}

export default App;
