import './App.css'
import {BrowserRouter} from 'react-router-dom'

import Header from './components/header/header.component';
import View from './views/views.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="hero_area">
      <BrowserRouter>
        <Header/>
          <View/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
