import Button from "@mui/material/Button";

import { useState } from "react";

const SimpleButton = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div
        hidden={visible}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <Alert severity="success">This is an error alert — check it out!</Alert>
      </div>
      <Button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {" "}
        {props.nombre}{" "}
      </Button>
    </div>
  );
};

export default SimpleButton;
