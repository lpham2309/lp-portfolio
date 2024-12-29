import {Contact} from './components/Contact';
// import {Education} from './components/Education';
// import {Experience} from './components/Experience';
import {Main} from './components/Main';
import {Projects} from './components/Projects';
import {Skills} from './components/Skills';
import {Timeline} from './components/Timeline/Timeline';


function App() {
  return (
    <div className='bg-white'>
      <Main/>
      <Projects/>
      <Skills/>
      <Timeline/>
      <Contact/>
    </div>
  )

}

export default App;
