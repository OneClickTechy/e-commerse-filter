import React from "react";
import Navigator from "./app/features/components/Navigator/Navigator";
import Aside from "./app/features/components/Aside/Aside";
import Main from "./app/features/components/Main/Main";

const App = () => {
  return (
    <>
      <Aside />
      <Navigator />
      <Main />      
    </>
  );
};

export default App;
