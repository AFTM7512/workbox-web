import MainRouter from "../router/MainRouter.jsx";
import Header from "./header/Header.jsx";
import style from "./app.scss";


function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.app__content}>
        <MainRouter />
      </div>
    </div>
  );
}

export default App;
