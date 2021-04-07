import React, { useState } from 'react';
import Spinners from '../../components/Spinners'
import { Link, withRouter } from 'react-router-dom';
import swal from 'sweetalert';

const Register = ({history}) => {

	const [registro, setRegistro] = useState({
		displayName: '',
		email: '',
		password: ''
	})
	const [showSpinner, setSpinner] = useState(false);
	
	const {displayName, email,password} = registro;

	const mensajeAlert = (text, icono, showBoton) =>{
		swal({
			text: text,
			icon: icono,
			buttons: showBoton
		});
	}

	const postFormRegistro = (registro)=>{
		var url = `${process.env.REACT_APP_API_URL}signup`;
		var data = registro;
		setSpinner(true)

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then((response) => {
			if(response.status === 201){
				setRegistro({
					displayName: '',
					email: '',
					password: '' 
				})
				setTimeout(()=>{
					setSpinner(false)
					mensajeAlert('Se Registro con Exito', 'success', false)
				}, 1000)
				setTimeout(()=>{
					swal.close()
					history.push('/Dashboard')
				}, 1300)
			}
		})
		.catch(error => console.error('Error:', error));
	}

	const handeChange = (e) =>{
		setRegistro({
			...registro,
			[e.target.name] : e.target.value
		})
	}

	const handleSubmit = (e) =>{
		e.preventDefault()
		if(displayName.trim() === '' || email.trim() === '' || password.trim() === ''){
			mensajeAlert('Todos los campos son obligatorios','error', 'ok')
			return;
		}

		postFormRegistro(registro)
	}

	return (
		<div>
			{showSpinner ? <Spinners/> : null}
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-lg-4 mx-auto">
						<div className="auth-form-light text-left py-5 px-4 px-sm-5">
							<div className="brand-logo">
								<img src={require("../../assets/images/logo.svg")} alt="logo" />
							</div>
							<h4>New here?</h4>
							<h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
							<form className="pt-3" onSubmit={handleSubmit}>
								<div className="form-group">
									<input onChange={handeChange} type="text" className="form-control form-control-lg" placeholder="Username" name="displayName" value={displayName}/>
								</div>
								<div className="form-group">
									<input onChange={handeChange} type="email" className="form-control form-control-lg" placeholder="Email" name="email" value={email}/>
								</div>
								<div className="form-group">
									<input onChange={handeChange} type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={password}/>
								</div>
								<div className="mt-3">
									<button
										className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" 
										type="submit"
									>SING UP</button>
								</div>
								<div className="text-center mt-4 font-weight-light">
									Already have an account? <Link to="/" className="text-primary">Login</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Register)
