import React from "react";
import {Form, Button} from 'react-bootstrap';

function Login(){
    return ( 
        <div className="w-50 m-auto p-5">
            <Form>
                <img src="assets/nncw.png" className="w-100 mx-auto d-block" style={{maxWidth:"200px", minWidth:"100px"}} alt="nnc-logo"></img>
                
                <Form.Group className="mt-5">
                    <Form.Control type="email" placeholder="Username"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="Password"></Form.Control>
                </Form.Group>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <Form.Control className="btn btn-success w-auto" type="submit" value="Sign In"></Form.Control> 
                    <a href="/Reset" className="text-muted">Forgot Password</a> 
                </div>
                             
            </Form>
        </div> 
    );
}
 
export default Login;