import React, { useState } from 'react';
import Spinners from '../../components/Spinners'
import { Link, withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import swal from 'sweetalert';

const Login =({history}) =>{

	const [login, setLogin] = useState({
		email: '',
		password: ''
	});
	const [showSpinner, setShowSpinner] = useState(false);

	const {email, password} = login;

	const mensaje = (text, icono, showBoton) => {
		swal({
			text: text,
			icon: icono,
			buttons: showBoton
		});
		return swal;
	};


	const postLogin = (dataLogin) => {
		var url = `${process.env.REACT_APP_API_URL}signin`;
		var data = dataLogin;
		setShowSpinner(true)

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then((response) => {
			console.log('Success:', response)
			console.log('status:', response.status)
			if(response.status === 400){
				setShowSpinner(false)
				mensaje('Correo Incorrecto', 'error', 'ok');
				return;
			} else if(response.status === 401){
				setShowSpinner(false)
				mensaje('Contraseña Incorrecta', 'error', 'ok');
				return;
			} else{
				setLogin({
					email: '',
					password: '',
				})
				setTimeout(()=>{
					setShowSpinner(false)
					history.push('/Dashboard')

				}, 1000)
			}
		})
		.catch(error => console.error('Error:', error));
	}
	const handleChange = e =>{
		setLogin({
			...login,
			[e.target.name] : e.target.value
		})
	}
	const handleSubmit = e =>{
		e.preventDefault();
		if(email.trim() === '' || password.trim() === ''){
			mensaje('Todos los campos son obligatorios', 'error', 'ok');
			return;
		}
		postLogin(login)
	}

	return(
		<div>
			{ showSpinner ? <Spinners/> : null }
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-lg-4 mx-auto">
						<div className="auth-form-light text-left py-5 px-4 px-sm-5">
							<div className="brand-logo">
								<img src={require("../../assets/images/logo.svg")} alt="logo" />
							</div>
							<h4>Hello! let's get started</h4>
							<h6 className="font-weight-light">Sign in to continue.</h6>
							<Form
								className="pt-3"
								onSubmit={handleSubmit}
							>
								<Form.Group className="d-flex search-field">
									<Form.Control onChange={handleChange} type="email" placeholder="Username" size="lg" className="h-auto" name="email" value={email}/>
								</Form.Group>
								<Form.Group className="d-flex search-field">
									<Form.Control onChange={handleChange} type="password" placeholder="Password" size="lg" className="h-auto" name="password" value={password}/>
								</Form.Group>
								<div className="mt-3">
									<button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">SIGN IN</button>
								</div>
								<div className="my-2 d-flex justify-content-between align-items-center">
									<a href="!#" className="auth-link text-black">Forgot password?</a>
								</div>
								<div className="mb-2">
									<button type="submit" className="btn btn-block btn-facebook auth-form-btn">
										<i className="mdi mdi-facebook mr-2"></i>Connect using facebook
									</button>
								</div>
								<div className="text-center mt-4 font-weight-light">
									Don't have an account? <Link to="/register" className="text-primary">Create</Link>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>  
		</div>
	)
}
export default withRouter(Login);
