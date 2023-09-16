import './Rules.css'

const Rules = () => {
    return (
    <div>
        <h3 className="Rules">REGLAS</h3>
        <ul>
            <li className="Rules">El juego se juega entre dos jugadores, en este caso el usuario y la computadora.</li>
            <li className="Rules">Cada jugador elige una de las tres opciones: piedra, papel o tijera.</li>
            <li className="Rules">PIEDRA le gana a TIJERA /  TIJERA le gana a PAPEL / PAPEL le gana a PIEDRA.</li>
            <li className="Rules">Si ambos jugadores eligen la misma opción, la ronda termina en empate y  se vuelve a jugar.</li>
            <li className="Rules">El juego finaliza cuando alguno de los jugadores alcanza 3 victorias.</li>
        </ul>
    </div>        
    )
};

export default Rules;