import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="./profile.jpg" alt="pfp" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Vatsal Awasthi</h1>
      <p>Trying to learn Web Dev to make myself financially independent.</p>
    </div>
  );
}

function SkillList() {
  // const bgcolor = props.color;
  return (
    <div className="skill-list">
      <Skill name="HTML" logo="✌️" color="red" />
      <Skill name="CSS" logo="🎉" color="blue" />
      <Skill name="JavaScript" logo="😎" color="green" />
      <Skill name="GE Proficy" logo="😢" color="yellow" />
      <Skill name="MES" logo="📈" color="orange" />
      <Skill name="SQL" logo="😅" color="violet" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.logo}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
