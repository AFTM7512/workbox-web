import style from "./test.scss";
import "./test.less";
import { Button } from "antd";

function App() {
  return (
    <div className={style.app}>
      aaa
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
