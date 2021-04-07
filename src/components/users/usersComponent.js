import React, {useEffect} from "react";
import { ProgressBar } from 'react-bootstrap';
import swal from 'sweetalert';
//import {routesApi} from '../../routesApi'

function UsersComponent({users, fetchUser, fetchDeleteUser, alertDelete}) {
	
	
	const userState = users.users

	useEffect(() => {
		fetchUser()
		if(alertDelete){
			swal({title: `El Usuario fue eliminado`});
			fetchUser()
		}

	}, [fetchUser, alertDelete])
	


	const deleteEmail = (id) =>{

		swal({
			title: "Seguro que quieres eliminar ?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		.then( response =>{
			if(response){
				fetchDeleteUser(id)
			} else{
				swal({title: "El campo no fue eliminado."});
			}
		})

	}

	return (
		<div>
			<div className="col-lg-12 grid-margin stretch-card">
				<div className="card">
					<div className="card-body">
						<h4 className="card-title">Usuarios</h4>
						<div className="table-responsive">
							<table className="table table-striped">
								<thead>
									<tr>
										<th> # </th>
										<th> Imagen </th>
										<th> Email </th>
										<th> Progress </th>
										<th> Options </th>
									</tr>
								</thead>
								<tbody>
									{userState.map((user, idx) => (
										<tr key={user._id}>
											<td>{idx + 1}</td>
											<td className="py-1">	<img src={require("../../assets/images/faces/face1.jpg")} alt="user icon" /></td>
											<td> {user.email}</td>
											<td><ProgressBar variant="success" now={25} /></td>
											<td>
												<div className="template-demo">
													<button type="button" className="btn btn-sm btn-outline-secondary">Editar <i className="fa fa-edit ml-1"></i></button>
													<button 
														type="button"
														onClick={() => deleteEmail(user._id)} 
														className="btn btn-outline-danger btn-sm"
														>Eliminar <i className="fa fa-times-rectangle ml-1"></i></button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UsersComponent;
