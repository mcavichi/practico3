import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const MySwal = withReactContent(Swal);

function Iniciar() {
    const iniciar = () => {
        MySwal.fire({
            title: 'Ingrese su nombre:',
            input: 'text',
            inputPlaceholder: 'Escriba su nombre aquí',
            inputValidator: (value) => {
                if (!value) {
                return 'Debe ingresar un nombre válido';
                }
            },
            confirmButtonText: 'Aceptar',
        }).then((result) => {
            if (result.isConfirmed) {
                let nombre = result.value;
                Swal.fire(
                '¡Hola ' + nombre + '!',
                'Bienvenido/a!',
                'success'
                )
            }
        })
    }
    return (
        <button onClick={iniciar}>Iniciar!</button>
    )
}
export default Iniciar;