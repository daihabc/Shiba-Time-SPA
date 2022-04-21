import './styles/app.css';
import { useState } from 'react';

import Views from './components/Views';
import About from './views/About';
import Pictures from './views/Pictures';
import Privacy from './views/Privacy';
import Form1 from './views/Form';
import FAQs from './views/FAQs';

const viewContent = {
  'Pictures':
    <Pictures />,
  'About':
    <About />,
  'FAQs':
    <FAQs />,
  'Privacy':
    <Privacy />,
  'Contact Us':
    <Form1 />,
};

function App() {
  const [viewPage] = useState(viewContent);
  return (
    <div className="app" >
      <div className="header">
        SHIBA &hearts; TIME
      </div>
      <Views entries={viewPage}/>
      <div className="footer">
        <div>@Shiba Time 2021</div>
      </div>
    </div>
  );
}

export default App;