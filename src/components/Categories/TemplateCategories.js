import React, { useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

const TemplateCategories = ({fetchCategories, categories}) => {
	
	useEffect(() => {
		fetchCategories()
	}, [fetchCategories]);

  return (
    <div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Striped Table</h4>
              <p className="card-description">
                {" "}
                Add className <code>.table-striped</code>
              </p>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> User </th>
                      <th> First name </th>
                      <th> Progress </th>
                      <th> Amount </th>
                      <th> Deadline </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((item, key) => (
                      <tr key={key}>
                        <td className="py-1">
                          <img
                            src={require("../../assets/images/faces/face1.jpg")}
                            alt="user icon"
                          />
                        </td>
                        <td> {item.name} </td>
                        <td>
                          <ProgressBar variant="success" now={25} />
                        </td>
                        <td> $ 77.99 </td>
                        <td> May 15, 2015 </td>
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
};

export default TemplateCategories;
