import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components";
import MainLayout from "./components/layouts/MainLayout";

const App = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
