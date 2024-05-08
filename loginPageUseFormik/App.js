import ReactDom from "react-dom/client";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Body />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
