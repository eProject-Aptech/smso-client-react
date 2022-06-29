import './App.css'
import TabsRouter from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="hero_area">
      <TabsRouter/>
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
