import React, { useState } from "react";
import Swal from "sweetalert2";

const NameInput = () => {
  const [nombre, setNombre] = useState("");

  const handleInputChange = () => {
    Swal.fire({
      title: "Ingrese su nombre",
      input: "text",
      inputPlaceholder: "Nombre",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: (inputValue) => {
        if (inputValue) {
          setNombre(inputValue);
        } else {
          Swal.showValidationMessage("Por favor, ingrese un nombre");
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  return (
    <div>
      <button onClick={handleInputChange}>Ingresar nombre</button>
      <p>Tu nombre es: {nombre}</p>
    </div>
  );
};

export default NameInput;
