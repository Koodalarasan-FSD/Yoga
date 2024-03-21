import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Index } from './templates/Index';
import { About } from './templates/About';
import { Classes } from './templates/Classes';
import { Trainers } from './templates/Trainers';
import { Events } from './templates/Events';
import { Blog } from './templates/Blog';
import { Contact } from './templates/Contact';
import { SingleBlog } from './templates/SingleBlog';

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Classes' element={<Classes/>}/>
        <Route path='/Trainers' element={<Trainers/>}/>
        <Route path='/Events' element={<Events/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/SingleBlog'element={<SingleBlog/>}/>
      </Routes>
    </div>
  );
}

export default App;
