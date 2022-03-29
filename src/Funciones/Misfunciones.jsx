import { useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function Misfunciones(params) {
  const [a, setA] = useState(params.a);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([
    { id: 0, nombre: "Ruben", apellido: "perez", visible: false }
  ]);
  const [newName, setNewName] = useState();
  const [newPlaceHolder, setNewPlaceHolder] = useState();

  function ChangeValue() {
    setVisible(!visible);
  }

  function deleteName(value) {
    setData(data.filter((i) => i.id !== value));
  }

  return {
    a,
    visible,
    data,
    setData,
    newName,
    setNewName,
    newPlaceHolder,
    setNewPlaceHolder,
    Suma: () => {
      setA(a + 1);
    },
    MySimpleButton: (props) => {
      return (
        <div>
          <Button onClick={ChangeValue}>{props.title}</Button>
        </div>
      );
    },
    Cajas: () => {
      return data.map((a) => (
        <Box
          sx={{
            "& > :not(style)": {
              m: 1,
              width: 120,
              height: 120
            }
          }}
        >
          <Paper
            onClick={() => {
              deleteName(a.id);
            }}
            elevation={4}
          >
            {a.nombre}
          </Paper>
        </Box>
      ));
    }
  };
}
