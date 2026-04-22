import Cita from "../Citas/Index.jsx";

const Listado = ({citas}) => {
  return (
    <div className="lista-citas">
      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
    </div>
  )
}

export default Listado;