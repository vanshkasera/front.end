import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axios.post('http://localhost:5000/api/login', formData);
            alert('Login successful');
            // Handle successful login (e.g., redirect, save token)
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    const handleSignupRedirect = () => {
        navigate('/signin');
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f2f5',
        },
        form: {
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '400px',
            boxSizing: 'border-box',
        },
        title: {
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#333',
        },
        formGroup: {
            marginBottom: '1rem',
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            color: '#555',
        },
        input: {
            width: 'calc(100% - 20px)',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            boxSizing: 'border-box',
        },
        button: {
            width: '100%',
            padding: '10px',
            backgroundColor:'rgb(0 123 253)',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '1rem',
        },
        buttonDisabled: {
            backgroundColor: '#cccccc',
            cursor: 'not-allowed',
        },
        signupButton: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '0.5rem',
        },
        errorMessage: {
            color: 'red',
            textAlign: 'center',
            marginTop: '1rem',
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Login</h2>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    style={loading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p style={styles.errorMessage}>{error}</p>}
                <button
                    type="button"
                    onClick={handleSignupRedirect}
                    style={styles.signupButton}
                >
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Login;
