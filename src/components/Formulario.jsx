import { useState, useEffect } from 'react';
import Error from './Error';


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState('');
	const [dx, setDx] = useState('');

	const [error, setError] = useState(false)
  
	useEffect(() =>{
		if(Object.keys(paciente).length > 0){
			setNombre(paciente.nombre)
			setEmail(paciente.email)
			setDate(paciente.date)
			setDx(paciente.dx)
		}
	}, [paciente])


	const generarId = () => {
		const random = Math.random().toString(36).substr(2);
		const fecha = Date.now().toString(36);

		return random + fecha
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		//validacion del formulario

    if ([nombre, email, date, dx].includes('')){
			console.log('hay al menos un campo vacío')
			
			setError(true)
		  return;
		}
   
		setError(false)

		//Objeto de Paciente
		const objetoPaciente = {
      nombre,
			email,
			date,
			dx,
		}

		if(paciente.id){
		  //Editando el registro
      objetoPaciente.id = paciente.id
			const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

    setPacientes(pacientesActualizados)
		setPaciente({})

		} else {
			//Nuevo registro
		  objetoPaciente.id = generarId();
			setPacientes([...pacientes, objetoPaciente]);
		}



		//reiniciar el form
		setNombre('')
		setEmail('')
		setDate('')
		setDx('')
	}

	return (

  <div className = "mx-5 md:w-1/2 lg:w-2/5">
	    <h2 className = "text-3xl font-black text-center">Seguimiento pacientes</h2>

			<p className = "mt-5 mb-10 text-lg text-center">
				Añade Pacientes y {" "}
				<span className = "font-bold text-indigo-600">Adminístralos</span>
			</p>
		  <form 
				onSubmit = {handleSubmit}
				className = "px-5 py-10 mb-10 bg-white rounded-lg shadow-md ">
        

				{ error &&  <Error><p>Todos los campos son obligatorios</p></Error>}
				
					<div className = "mb-5">
				<label htmlFor = "nombre" className = "block font-bold text-gray-700 uppercase">
				 Nombre del Paciente
				</label>

				<input
					id = "nombre"
					type = "text"
					placeholder = "Nombre del Paciente"
					className = "w-full mt-2 placeholder-blue-300 border-2 p2 rounded-md"
					value ={nombre}
					onChange = { (e) => setNombre(e.target.value) }
				/>
			 </div>
		   
			<div className = "mb-5">
				<label htmlFor = "contacto" className = "block font-bold text-gray-700 uppercase">
				 E-mail de contacto
				</label>

				<input
					id = "contacto"
					type = "email"
					placeholder = "E-mail de contacto"
					className = "w-full mt-2 placeholder-blue-300 border-2 p2 rounded-md"
					value ={email}
					onChange = { (e) => setEmail(e.target.value) }
				/>
			 </div>
			
			<div className = "mb-5">
				<label htmlFor = "cita" className = "block font-bold text-gray-700 uppercase">
				 Fecha de la cita
				</label>

				<input
					id = "cita"
					type = "date"
					className = "w-full mt-2 text-blue-300 border-2 p2 rounded-md"
					value ={date}
					onChange = { (e) => setDate(e.target.value) }
				/>
			 </div>
    
			<div className = "mb-5">
				<label htmlFor = "description" className = "block font-bold text-gray-700 uppercase">
				 Descripción de los síntomas
				</label>

				<textarea
					id = "Description"
					type = "text"
					placeholder = "Descripción de los síntomas"
					className = "w-full mt-2 placeholder-blue-300 border-2 p2 rounded-md"
					value ={dx}
					onChange = { (e) => setDx(e.target.value) }
				/>
			 </div>
      
       <input
				 type = "submit"
				 className = "w-full p-3 font-bold text-white uppercase bg-indigo-600 cursor-pointer rounded-md hover:bg-indigo-700 transition-all"
				 value = {paciente.id ? 'Editar Paciente':'Agregar Paciente'}
			 />

			</form>
	</div>
	)
}
export default Formulario;
