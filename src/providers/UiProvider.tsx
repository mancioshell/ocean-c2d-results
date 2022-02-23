import React, { useState } from "react";
import { UIContext } from "Contexts/UIContext";

const UiProvider = ({ children }: any) => {
  const [message, addMessage] = useState({
    text: "",
    type: "",
    variant: "light",
    show: false,
  });

  const { Provider } = UIContext;
  return <Provider value={{ message, addMessage }}>{children}</Provider>;
};

export default UiProvider;
