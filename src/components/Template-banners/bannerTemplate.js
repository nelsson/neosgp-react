import React, { useState, useEffect } from "react";
import { Imagen } from "./style";
import swal from "sweetalert";
import ModalEditar from "../../components/ModalEditar";
import ModalAddBanner from "../../components/ModalAddBanner";

const TemplateBanner = ({ 
	fetchBanner, 
	banner, 
	editar, 
	fetchEditar, 
	fetchDelete,
	alertSuccess,
	fetchAddBanner,
	active,
	isActiveBanner,
	fetchIsActiveBanner
}) => {
	
	const urlBase = process.env.REACT_APP_BASE_URL_DO;
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	
	const handleChange = (e)=>{
		const checkBanner = {
			id: e.target.value,
			disabled : e.target.checked,
		}

		fetchIsActiveBanner(checkBanner)
	}


	const handOpen = () => {
		setOpen(true);
	};

	const openModalAddBanner = () => {
		setOpenModal(true);
	};

	const handClose = (status) => {
		setOpen(false);
		if (status) {
			fetchBanner();
		}
	};

	const closeModalAddBanner = () => {
		setOpenModal(false);
		fetchBanner();
	};

	useEffect(() => {
		fetchBanner();
		if(alertSuccess) {
			swal({ 
				title: alertSuccess.title,
				icon: alertSuccess.icon 
			})
			fetchBanner();
		}		
	}, [alertSuccess,fetchBanner]);


	const eliminarBanner = (id) => {
		swal({
			title: "Seguro que quieres eliminar ?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((response) => {
			if (response) {
				fetchDelete(id)
			} else {
				swal({ title: "El campo no fue eliminado." });
			}
		});
	};
	

	return (
		<div className="grid-margin">
			<div className="buttons_bt mb-4">
				<button
					type="button"
					onClick={() => {
						openModalAddBanner();
					}}
					className="btn btn-sm btn-success"
				>
					Agregar Banner
				</button>
			</div>
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">Banners Home</h4>
					<div className="table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th> # </th>
									<th>Banners</th>
									<th>Title</th>
									<th>Sub Title</th>
									<th>Status</th>
									<th>Opciones</th>
								</tr>
							</thead>
							<tbody>
								{banner.length > 0
									? banner.map((item, keys) => (
											<tr key={item._id} data-id={item._id}>
												<td>{keys + 1}</td>
												<td className="py-1">
													<Imagen
														src={`${urlBase}${item.image.path}`}
														alt="user icon"
													/>
													<span className="ml-2">{item.image.path}</span>
												</td>
												<td>{item.title}</td>
												<td>{item.subtitle}</td>
												<td>
													<div className="form-check">
														<label className="form-check-label">
															<input
																type="checkbox"
																value={item._id}
																className="form-check-input"
																onClick={handleChange}
															/>
															<i className="input-helper"></i>
															Mostrar/ocultar
														</label>
													</div>
												</td>
												<td>
													<div className="template-demo">
														<button
															type="button"
															onClick={(e) => {
																e.preventDefault();
																fetchEditar(item._id);
																handOpen();
															}}
															className="btn btn-sm btn-outline-secondary"
														>
															Editar <i className="fa fa-edit ml-1"></i>
														</button>
														<button
															type="button"
															onClick={() => eliminarBanner(item._id) }
															className="btn btn-sm btn-outline-danger"
														>
															Eliminar
															<i className="fa fa-times-rectangle ml-1"></i>
														</button>
													</div>
												</td>
											</tr>
										))
									: null}
							</tbody>
						</table>

						{editar.length > 0
							? editar.map((item) => (
									<ModalEditar
										key={item._id}
										open={open}
										getModalInfo={editar[0]}
										handClose={handClose}
									/>
								))
							: null}
					</div>
				</div>
			</div>
			<ModalAddBanner
				openModal={openModal}
				closeModalAddBanner={closeModalAddBanner}
				fetchAddBanner={fetchAddBanner}
				active={active}
			/>
		</div>
	);
};

export default TemplateBanner;
