import { Education } from "./components/Education.jsx";
import { GeneralInfo } from "./components/GeneralInfo.jsx";
import { Experience } from "./components/Experience.jsx";
import "./styles/App.css";

function App() {
    return (
        <>
            <header>
                <h1>Create Your Own Resume</h1>
            </header>
            <main>
                <GeneralInfo />
                <Education />
                <Experience />
            </main>
        </>
    );
}

export default App;
