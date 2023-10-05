import "./styles/app.css"
import Submit from "./components/Submit";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Submit />
        </div>
        <div className="col-md-7 my-auto">
        </div>
      </div>
    </div>
  );
}

export default App;