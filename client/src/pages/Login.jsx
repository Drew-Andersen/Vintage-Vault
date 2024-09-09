import { useState } from "react";
import { Link } from "react-router-dom";
import './login.css';

export default function Login() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="form-div bg-white p-3 rounded border">
                    <h2>Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name">
                                <strong>Email</strong>
                            </label>
                            <input type="email" placeholder="Enter your eamil" autoComplete="off" name="email" className="form-control rounded" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name">
                                <strong>Password</strong>
                            </label>
                            <input type="password" placeholder="Enter your password" autoComplete="off" name="password" className="form-control rounded" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success w-100 rounded">
                                Login
                            </button>
                        </div>
                        <div className="text-center">
                            <p className="text-center mb-0 mt-3">Already have an account?</p>
                            <Link to='/signup' className="btn btn-primary border w-100 rounded rext-decoration-nopne">
                                Sign-up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// export default function Login() {
//     return (
//         <>
//             <div>
//                 <div className='w-50 m-auto'>
//                     <div className='mx-auto my-5 py-3 border border-dark rounded'>
//                         <Form className='w-50 m-auto'>
//                             <h3 className='font-weight-bold text-center'>Login</h3>
//                             <Form.Group className="mb-3" controlId="formBasicEmail">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control className='border border-rounded border-dark' type="email" placeholder="Please enter a email" />
//                             </Form.Group>

//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control className='border border-rounded border-dark' type="password" placeholder="Please enter a password" />
//                             </Form.Group>
//                             <Button variant="primary" type="submit">
//                                 Submit
//                             </Button>
//                         </Form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
