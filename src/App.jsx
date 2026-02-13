import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dropdown from "./dropdown";

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    course: "",
    gpa: "",
    submitted: false,
    proccessing: false,
  });
  const [submittedInfo, setSubmittedInfo] = useState({
    name: "",
    email: "",
    course: "",
    gpa: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    setInfo({ ...info, proccessing: true });
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1000);
    setSubmittedInfo({
      name: info.name,
      email: info.email,
      course: info.course,
      gpa: info.gpa,
    });
    setInfo({ ...info, submitted: true });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="nameTf"
          id="name"
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
          required
          disabled={info.submitted}
        />
        <label htmlFor="email">email:</label>
        <input
          type="email"
          className="emailTf"
          id="email"
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
          required
          disabled={info.submitted}
        />
        <label>
          course:
          <Dropdown
            setinfo={setInfo}
            info={info}
            value={info.course}
            required
            className="courseTf"
            disabled={info.submitted}
          />
        </label>
        <label htmlFor="gpa">GPA:</label>
        <input
          type="number"
          className="gpaTf"
          id="gpa"
          min={0}
          max={4}
          step={0.05}
          pattern="[0-4]{1}"
          value={info.gpa}
          onChange={(e) => setInfo({ ...info, gpa: e.target.value })}
          required
          disabled={info.submitted}
        />
        <input
          type="submit"
          value={"submit"}
          className="submitbtn"
          disabled={info.proccessing}
        />
      </form>
      {info.submitted && (
        <div className="submittedInfo">
          <h2>submitted Information:</h2>
          <p>Name: {submittedInfo.name}</p>
          <p>Email: {submittedInfo.email}</p>
          <p>Course: {submittedInfo.course}</p>
          <p>GPA: {submittedInfo.gpa}</p>
          <button
            onClick={() =>
              setInfo({
                name: "",
                email: "",
                course: "",
                gpa: "",
                submitted: false,
                proccessing: false,
              })
            }
          >
            reset form
          </button>
        </div>
      )}
    </>
  );
}

export default App;
