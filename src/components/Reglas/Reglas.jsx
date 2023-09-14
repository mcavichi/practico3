import './Reglas.css'

const Reglas = () => {
    return (
    <ul>
        <li className="listado">El juego se juega entre dos jugadores, en este caso el usuario y la computadora.</li>
        <li className="listado">Cada jugador elige una de las tres opciones: piedra, papel o tijera.</li>
        <li className="listado">PIEDRA le gana a TIJERA /  TIJERA le gana a PAPEL / PAPEL le gana a PIEDRA.</li>
        <li className="listado">Si ambos jugadores eligen la misma opción, la ronda termina en empate y  se vuelve a jugar.</li>
        <li className="listado">El juego finaliza cuando alguno de los jugadores alcanza 3 victorias.</li>
    </ul>
    )
};

export default Reglas;