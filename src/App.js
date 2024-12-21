import logo from './logo.svg';
import './App.css';
import { Router } from './Routers/Router';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Router />
      </SkeletonTheme>
    </div>
  );
}

export default App;
