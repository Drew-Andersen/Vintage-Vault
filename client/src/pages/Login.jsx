import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    return (
        <>
            <div>
                <div className='w-50 m-auto'>
                    <div className='mx-auto my-5 py-3 border border-dark rounded'>
                        <Form className='w-50 m-auto'>
                            <h3 className='font-weight-bold'>Login</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className='border border-rounded border-dark' type="email" placeholder="Please enter a email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className='border border-rounded border-dark' type="password" placeholder="Please enter a password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}