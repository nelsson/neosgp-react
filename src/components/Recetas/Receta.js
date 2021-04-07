import React, { useEffect } from "react";

function Recetas({recetas, fetchRecetas}) {
  const LocalUrl = process.env.REACT_APP_BASE_URL_DO;
  useEffect(() => {
	 fetchRecetas()
  }, [fetchRecetas]);

  return (
	 <>
		<div class="buttons_bt mb-4">
			<button type="button" class="btn btn-sm btn-success">Agregar Recipes</button>
		</div>
		<div className="col-lg-12 grid-margin stretch-card">
		  <div className="card">
			 <div className="card-body">
				<h4 className="card-title">Recipes</h4>
				<div className="table-responsive">
				  <table className="table">
					 <thead>
						<tr>
						  <th></th>
						  <th>Banner</th>
						  <th>Name recipe</th>
						  <th>Created</th>
						  <th>Status</th>
						  <th></th>
						</tr>
					 </thead>
					 {recetas && recetas.length > 0 && (
						<tbody>
						  {recetas.map((item, key) => (
							 <tr key={key}>
								<td>{key+1}</td>
								<td className="py-1">
								  <img
									 src={`${LocalUrl}${item.image.path}`}
									 alt="user icon"
								  />
								</td>
								<td>{item.name}</td>
								<td>{item.createDate}</td>
								<td>
								  <div className="form-check">
									 <label className="form-check-label text-muted">
										<input
										  type="checkbox"
										  className="form-check-input"
										/>
										<i className="input-helper"></i>
										Active
									 </label>
								  </div>
								</td>
								<td>
								  <button
									 type="button"
									 className="btn btn-outline-secondary btn-icon-text mr-2"
								  >
									 <i className="fa fa-pencil-square-o btn-icon-append"></i>
									 Edit
								  </button>
								  <button
									 type="button"
									 className="btn btn-outline-danger  btn-icon-text"
								  >
									 <i className="fa fa-trash-o btn-icon-prepend"></i>
									 Delete
								  </button>
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

export default Recetas;
