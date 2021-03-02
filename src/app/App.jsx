import MainRouter from "../router/MainRouter.jsx";
import Side from "../components/side/Side.jsx";
import style from "./app.scss";


function App() {
  return (
    <div className={style.app}>
      <Side />
      <div className={style.app__content}>
        <MainRouter />
      </div>
    </div>
  );
}

export default App;
