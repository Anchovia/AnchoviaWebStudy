import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<DayList/>}/>
          <Route path="/day/:day" element={<Day/>}/>
          <Route path="/*" element={<EmptyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;