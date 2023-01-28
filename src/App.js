import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState("남자 코트 추천");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ posts }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;