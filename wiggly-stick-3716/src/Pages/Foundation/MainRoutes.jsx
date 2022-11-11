import { Route, Routes } from "react-router-dom";
import FoundationPage from "./FoundationPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<FoundationPage />} />
    </Routes>
  );
};

export default MainRoute;
