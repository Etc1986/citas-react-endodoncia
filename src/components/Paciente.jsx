const Paciente = ({paciente, setPaciente, eliminarPaciente}) =>  {

  const {nombre, email, date, dx, id} = paciente
  
	const handleEliminar = () => {
		const respuesta = confirm('Deseas eliminar este paciente?')

		if(respuesta) {
			eliminarPaciente(id)
		}
	}

	return (
	<div className = "px-5 py-10 mx-5 my-10 bg-white shadow-md rounded-xl">
		<p className = "mb-3 font-bold text-gray-700 uppercase">Nombre: {" "}
		<span className = "font-normal normal-case">{nombre}</span>
		</p>
				
		<p className = "mb-3 font-bold text-gray-700 uppercase">E-mail de contacto: {" "}
		<span className = "font-normal normal-case">{email}</span>
		</p>

		<p className = "mb-3 font-bold text-gray-700 uppercase">Fecha de la cita: {" "}
			<span className = "font-normal normal-case">{date}</span>
		</p>
				
<p className = "mb-3 font-bold text-gray-700 uppercase">Cx/Dx: {" "}
			<span className = "font-normal normal-case">{dx}</span>
		</p>
		
	<div className = "flex justify-between mt-10">
			<button 
				type = "button" className ="px-10 py-2 font-bold text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-800"
				onClick ={() => setPaciente (paciente)}
			>Editar</button>
			
			<button 
				type = "button" className ="px-10 py-2 font-bold text-white uppercase bg-red-600 rounded-lg hover:bg-red-800"
				onClick = {handleEliminar}
			>Eliminar</button>
		
		</div>				
	</div>
	)
}

export default Paciente;
