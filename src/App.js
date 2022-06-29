
import AppRoutes from "./Routes/Routes";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux/es/exports";

function App() {
  const { lng } = useSelector(state => state.userReducer);
  return (<>
    <ConfigProvider  direction={lng ==='en'?'ltr':'rtl'}>
    <AppRoutes />
   </ConfigProvider>
   
  </>)
}

export default App;
