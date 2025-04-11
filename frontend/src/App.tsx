import { useRoutes } from "react-router-dom";
import routes from "../src/utils/routes";

function App() {
  const routing = useRoutes(routes);
  return <>{routing}</>;
}

export default App;
