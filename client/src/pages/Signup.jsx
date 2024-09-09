import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Alert } from 'react-bootstrap';

import { createUser } from '../utils/API';
// import Auth from '../utils/auth';

export default function Signup() {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="bg-white p-3 rounded w-25 border">
                    <h2>Sign-up</h2>
                     {/*noValidate validated={validated} -- goes on the <Form>*/}
                    <Form onSubmit={handleFormSubmit}>
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
                            Something went wrong with your sign-up!
                        </Alert>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="username">
                                <strong>Username</strong>
                            </Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter your username" 
                                name="username" 
                                onChange={handleInputChange}
                                value={userFormData.username}
                                className="form-control rounded" 
                                required
                            />
                            <Form.Control.Feedback type="invalid">Username is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">
                                <strong>Email</strong>
                            </Form.Label>
                            <Form.Control 
                                type="email"
                                placeholder="Enter your eamil" 
                                name="email" 
                                onChange={handleInputChange}
                                value={userFormData.email}
                                className="form-control rounded"
                                required
                            />
                            <Form.Control.Feedback type="invalid">Email is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">
                                <strong>Password</strong>
                            </Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter your password" 
                                name="password" 
                                onChange={handleInputChange}
                                value={userFormData.password}
                                className="form-control rounded" 
                                required
                            />
                            <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Button 
                            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                            type="submit" 
                            variant="success"
                            className="btn btn-success w-100 rounded">
                            Sign-up
                        </Button>
                        <div>
                            <p className="text-center mb-0 mt-3">Already have an account?</p>
                            <Link to='/login' className="btn btn-primary border w-100 rounded rext-decoration-nopne">
                                Login
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

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