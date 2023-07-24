import { Form, Button } from 'react-bootstrap';

export default function Login() {
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