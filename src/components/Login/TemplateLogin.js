import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

const TemplateLogin = () => {
   return (
      <div className="d-flex align-items-center auth px-0">
         <div className="row w-100 mx-0">
            <div className="col-lg-6 mx-auto">
               <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <h6 className="font-weight-light text-center">Sign in to continue.</h6>
                  <Form className="pt-3">
                     <Form.Group className="d-flex search-field">
                        <Form.Control type="email" placeholder="Username" size="lg" className="h-auto" name="email" />
                     </Form.Group>
                     <Form.Group className="d-flex search-field">
                        <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" name="password"/>
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
   );
}
 
export default TemplateLogin;