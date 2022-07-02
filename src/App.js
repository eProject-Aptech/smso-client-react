import './App.css'
import {BrowserRouter} from 'react-router-dom'

import Header from './components/header/header.component';
import View from './views/Views.component';

function App() {
  return (
    <div className="hero_area">
      <BrowserRouter>
        <Header/>
        <View/>
      </BrowserRouter>
    </div>
  );
}

export default App;
