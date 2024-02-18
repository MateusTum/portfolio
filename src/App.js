import "./App.css";
import NavigationBar from "./components/Navigation/NavigationBar";
import PresentationSection from "./components/0-Presentation/PresentationSection";
import SkillsSection from "./components/1-Skills/SkillsSection";
import ProjectsSection from "./components/2-Projects/ProjectsSection";

function App() {
  return (
    <>
      <NavigationBar />
      <PresentationSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}

export default App;
