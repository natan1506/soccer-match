import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

function App() {

  return (
    <BrowserRouter>
      <div className='font-inter bg-base-200 overflow-x-auto' >
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
