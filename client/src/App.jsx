import "./App.scss";
import axios from "axios";
import CourseOfferingList from "./components/CourseOfferingList/CourseOfferingList";
import BreadcrumbBar from "./components/Molecules/BreadcrumbBar/BreadcrumbBar";
import NavMenuBar from "./components/Molecules/NavMenuBar/NavMenuBar";
import NoticePanel from "./components/Molecules/NoticePanel/NoticePanel";
import PageHeader from "./components/Molecules/PageHeader/PageHeader";
import SideBar from "./components/Molecules/SideBar/SideBar";
import UtilMenuBar from "./components/Molecules/UtilMenuBar/UtilMenuBar";
import AccordionList from "./components/Molecules/AccordionList/AccordionList";
import Footer from './components/Molecules/Footer/Footer'
import { useEffect, useState } from "react";


const App = () => {
  const [courseDetails, setCourseDetails] = useState({});

  const getCourseDetails = async () => {
    try {
      const response = await axios.get("https://bcit-web-server.vercel.app/courses");
      console.log("Full response:", response.data);
      if (!response.data.course) {
        console.log("Data is not available");
      }
      console.log(response.data.course);
      setCourseDetails(response.data.course);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  useEffect(() => {
    getCourseDetails();
  }, []);

  return (
    <div className="app">
      <UtilMenuBar />
      <NavMenuBar />
      <BreadcrumbBar />
      <PageHeader
        crn={courseDetails.crn}
        title={courseDetails.title}
        scope={courseDetails.scope}
        subject={courseDetails.subject}
      />
      <div className="contentArea">
        <SideBar />
        <div className="contentArea__main">
          <NoticePanel
            heading="International Fees"
            descr="International fees are typically 3.12 times the domestic tuition. Exact cost will be calculated upon completion of registration."
            type="info"
          />
          {}
          <AccordionList courseDetails={courseDetails} />
          <CourseOfferingList courseDetails={courseDetails} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
