import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

	return (
		<div className = "overflow-y-scroll md:h-screen md:w-1/2 lg:w-3/5">
		 

			{pacientes && pacientes.length ?(
				<>
				<h2 className = "text-3xl font-black text-center">Listado Pacientes</h2>
			<p className = "mt-5 mb-10 text-xl text-center">
				Administra tus {" "}
				<span className = "font-bold text-indigo-600">Pacientes y Citas</span>
			</p>
			{pacientes.map( paciente => (
		 <Paciente
			 key= {paciente.id}	
			 paciente = {paciente}
			 setPaciente ={setPaciente}
			 eliminarPaciente = {eliminarPaciente}
		  />
			
			))}
				</>	
			) :  (
				<>
				<h2 className = "text-3xl font-black text-center">Sin Pacientes</h2>
			<p className = "mt-5 mb-10 text-xl text-center">
				Comienza a agregar pacientes {" "}
				<span className = "font-bold text-indigo-600">Aquí</span>
			</p>
					
				</>
			)}	


		
		</div>	
	)
}

export default ListadoPacientes;
