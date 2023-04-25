import {Routes, Route, useNavigate} from 'react-router-dom';
import First from './component/first';
import Second from './component/Second';
import Third from './component/Third';
import Fourth from './component/Fourth';
import Fifth from './component/Fifth'


export default function App() {
  const navigate = useNavigate();

  const navigateTooption2 = () => {
    // 👇️ navigate to /contacts
    navigate('/option2');
  };
  const navigateTooption3 = () => {
    // 👇️ navigate to /contacts
    navigate('/option3');
  };
  const navigateTooption4 = () => {
    // 👇️ navigate to /contacts
    navigate('/option4');
  };
  const navigateTooption5 = () => {
    // 👇️ navigate to /contacts
    navigate('/option5');
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  return (
    <div>
      <div>
        <button onClick={navigateHome}>Option 1</button>
        <hr />
        <button onClick={navigateTooption2}>option 2</button>
        <hr />
        <button onClick={navigateTooption3}>option 3</button>
        <hr />
        <button onClick={navigateTooption4}>option4</button>
        <hr />
        <button onClick={navigateTooption5}>option 5</button>

        <Routes>
        <Route path="/option5" element={<Fifth/>} />
        <Route path="/option4" element={<Fourth />} />
        <Route path="/option3" element={<Third />} />
          <Route path="/option2" element={<Second />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return <First/> ;
}

function option2() {
  return <Second/>;
}
function option3() {
  return <Third/>;
}
function option4() {
  return <Fourth/>;
}
function option5() {
  return <Fifth/>;
}
