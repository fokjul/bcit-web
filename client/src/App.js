import './App.scss';
import CourseOfferingList from './components/CourseOfferingList/CourseOfferingList';
import BreadcrumbBar from './components/Molecules/BreadcrumbBar/BreadcrumbBar';
import NavMenuBar from './components/Molecules/NavMenuBar/NavMenuBar';
import NoticePanel from './components/Molecules/NoticePanel/NoticePanel';
import PageHeader from './components/Molecules/PageHeader/PageHeader';
import SideBar from './components/Molecules/SideBar/SideBar';
import UtilMenuBar from './components/Molecules/UtilMenuBar/UtilMenuBar';
import Accordion from './components/Molecules/Accordion/Accordion';

function App() {
  return (
    <div className="app">
      <UtilMenuBar />
      <NavMenuBar />
      <BreadcrumbBar />
      <PageHeader />
      <div className='contentArea'>
        <SideBar />
        <div className='contentArea__main'>
          <NoticePanel 
            heading='International Fees'
            descr='International fees are typically 3.12 times the domestic tuition. Exact cost will be calculated upon completion of registration.'
            type='info'
          />
          <Accordion />
          <CourseOfferingList />
        </div>
      </div>
      
    </div>
  );
}

export default App;
