import "./styles.css";
import SimpleButton from "./Componentes/MyButton";
import { useState } from "react";
import Misfunciones from "./Funciones/Misfunciones";
import Button from "@mui/material/Button";

export default function App() {
  // Crear una suma
  const {
    a,
    visible,
    Suma,
    data,
    setData,
    newName,
    setNewName,
    newPlaceHolder,
    setNewPlaceHolder,
    MySimpleButton,
    Cajas
  } = Misfunciones({
    a: 1,
    b: 22
  });

  return (
    <div className="App">
      <input
        onChange={(e) => {
          setNewName(e.target.value);
        }}
        value={newName}
        placeholder={newPlaceHolder}
      />
      {newName}
      <Button
        onClick={() => {
          if (newName !== "") {
            setData((data) => [
              ...data,
              {
                id: data.length,
                nombre: newName,
                apellido: "perez",
                visible: false
              }
            ]);
          } else {
            setNewPlaceHolder("Falta caja de texto");
          }
          setNewName("");
        }}
      >
        Agregar datos
      </Button>
      <MySimpleButton title="Esconder caja" />
      <Cajas />
    </div>
  );
}
