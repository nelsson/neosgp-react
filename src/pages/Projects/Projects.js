import React, { useEffect } from "react";

const Projects = ({ listProjects, getReceiveProjects, getTest }) => {
    useEffect(() => {
        if (!listProjects) {
          getTest();
          getReceiveProjects();
          return;
        }
    }, [getReceiveProjects, listProjects, getTest]);
    
    console.log('en proyectos', listProjects);

	return (
		<>
			<h2>Página de Proyectos</h2>
			<div className="col-lg-12 grid-margin stretch-card">
				<div className="card">
					<div className="card-body">
						<h4 className="card-title">Basic Table</h4>
						<p className="card-description"> Add className <code>.table</code>
						</p>
						<div className="table-responsive">
							<table className="table">
								<thead>
									<tr>
										<th width="80%">Profile</th>
										<th width="20%">Status</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td width="80%">Riturnit APP</td>
										<td width="20%">
											<button type="button" className="btn btn-outline-primary">Ver detalle</button>
											<button type="button" className="btn btn-outline-primary">Ver tareas</button>
										</td>
									</tr>
									<tr>
										<td width="80%">Granos del valle</td>
										<td width="20%">
											<button type="button" className="btn btn-outline-primary">Ver detalle</button>
											<button type="button" className="btn btn-outline-primary">Ver tareas</button>
										</td>
									</tr>
									<tr>
										<td width="80%">Intranet CMQ</td>
										<td width="20%">
											<button type="button" className="btn btn-outline-primary">Ver detalle</button>
											<button type="button" className="btn btn-outline-primary">Ver tareas</button>
										</td>
									</tr>
									<tr>
										<td width="80%">Global Inmobiliaria</td>
										<td width="20%">
											<button type="button" className="btn btn-outline-primary">Ver detalle</button>
											<button type="button" className="btn btn-outline-primary">Ver tareas</button>
										</td>
									</tr>
									<tr>
										<td width="80%">Los Portales Vivienda</td>
										<td width="20%">
											<button type="button" className="btn btn-outline-primary">Ver detalle</button>
											<button type="button" className="btn btn-outline-primary">Ver tareas</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}
 
export default Projects;