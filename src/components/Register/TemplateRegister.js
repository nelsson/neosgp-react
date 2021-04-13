import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';


const TemplateRegister = () => {
   return (
      <Fragment>
         <div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-lg-4 mx-auto">
						<div className="auth-form-light text-left py-5 px-4 px-sm-5">
							<h4>New here?</h4>
							<h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
							<form className="pt-3">
								<div className="form-group">
									<input type="text" className="form-control form-control-lg" placeholder="Username" name="displayName"/>
								</div>
								<div className="form-group">
									<input type="email" className="form-control form-control-lg" placeholder="Email" name="email"/>
								</div>
								<div className="form-group">
									<input type="password" className="form-control form-control-lg" placeholder="Password" name="password"/>
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
      </Fragment>
   );
}
 
export default TemplateRegister;