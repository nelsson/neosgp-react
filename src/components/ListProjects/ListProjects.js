import React, { useEffect } from "react";

const ListProjects = ({ listProjects, getReceiveProjects, getTest }) => {
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
                                {listProjects && listProjects.results.length > 0 && (
                                    <tbody>
                                            {listProjects.results.map((item, key) => (
                                                <tr key={key}>
                                                    <td width="80%">{item.title} <button type="button" className="btn btn-outline-secondary">0</button></td>
                                                    <td width="20%">
                                                        <button type="button" className="btn btn-outline-primary">Ver detalle</button>
                                                        <button type="button" className="btn btn-outline-primary">Ver tareas</button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                )}

							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
 
export default ListProjects;