import { Header } from "./layouts";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </div>
  );
}

export default App;
