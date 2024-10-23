import './App.scss';
import CourseOfferingList from './components/CourseOfferingList/CourseOfferingList';
import NavMenuMain from './components/Molecules/NavMenuMain/NavMenuMain';
import NavMenuUtil from './components/Molecules/NavMenuUtil/NavMenuUtil';

function App() {
  return (
    <div className="App">
      <NavMenuUtil />
      <NavMenuMain />
      <CourseOfferingList />
    </div>
  );
}

export default App;
