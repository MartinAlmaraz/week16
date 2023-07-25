import { Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

export default function Login() {
  
    // const navigate = useNavigate()

   
    return (
        <Form>
            <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control  placeholder='Enter email' />
                <Form.Text className='text-muted'>
                    Enter your email.
                </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password'/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}