// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// export default function Signup() {
//     return (
//         <>
//             <div>
//                 <div className='w-50 m-auto'>
//                     <div className='mx-auto my-5 py-3 border border-dark rounded'>
//                         <Form className='w-50 m-auto'>
//                             <h3 className='font-weight-bold'>Sign-up</h3>
//                             <Form.Group className="mb-3" controlId="formBasicUsername">
//                                 <Form.Label>Username</Form.Label>
//                                 <Form.Control className='border border-rounded border-dark' type="text" placeholder="Please enter a username" />
//                             </Form.Group>

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

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    return(
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="bg-white p-3 rounded w-25 border">
                    <h2>Sign-up</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name">
                                <strong>Name</strong>
                            </label>
                            <input type="text" placeholder="Enter your name" autoComplete="off" name="name" className="form-control rounded" />
                        </div>
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
                        <button type="submit" className="btn btn-success w-100 rounded">
                            Sign-up
                        </button>
                        <div>
                            <p className="text-center mb-0 mt-3">Already have an account?</p>
                            <Link to='/login' className="btn btn-primary border w-100 rounded rext-decoration-nopne">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}