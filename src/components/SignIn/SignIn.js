import { Button } from 'react-bootstrap';
import React from 'react';
import { Google } from 'react-bootstrap-icons';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignIn.css';

const SignIn = () => {
    const { signInUsingGoogle, processLogin, setIsLoading, error, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    return (
        <div className="container mt-5">
            <div className="border border-2 w-50 mx-auto py-5">
                <h4 className="mb-4 text-center"> Login With </h4>
                <div className="mx-auto text-center">
                    <Button onClick={handleGoogleSignIn} className="rounded-pill border border-1 mb-3" variant="info" type="submit">
                        <Google /> <span className="ms-5 me-5">Continue with Google</span>
                    </Button>
                    <p>Don't have an account?
                        <Link className="text-center" to="/signin"><span className="ms-2">Create an Account</span></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;