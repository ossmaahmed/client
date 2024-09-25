import "./loading.css";
import { CircularProgress } from "@mui/material";

const loading = () => {
  return (
    <div className="loadingContainer">
      <p className="loadingLogo">TAWARI</p>
      <CircularProgress style={{ color: "white" }} size={"32px"} />
    </div>
  );
};

export default loading;
