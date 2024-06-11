import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
            const res = await axios.post('http://localhost:5000/api/contact', formData);
            alert(res.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to send message');
        } finally {
            setLoading(false);
        }
    };

    const styles = {
        form: {
            maxWidth: '600px',
            margin: '100px auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
        },
        div: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        input: {
            width: 'calc(100% - 20px)',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxSizing: 'border-box',
            fontSize: '16px',
        },
        textarea: {
            width: 'calc(100% - 20px)',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxSizing: 'border-box',
            fontSize: '16px',
            height: '100px',
            resize: 'vertical',
        },
        button: {
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: loading ? '#cccccc' : 'rgb(0, 123, 253)', // Updated background color
            color: 'white',
            fontSize: '16px',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s ease',
        },
        error: {
            marginTop: '10px',
            color: 'red',
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.div}>
                <label style={styles.label}>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} />
            </div>
            <div style={styles.div}>
                <label style={styles.label}>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
            </div>
            <div style={styles.div}>
                <label style={styles.label}>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required style={styles.textarea}></textarea>
            </div>
            <button type="submit" disabled={loading} style={styles.button}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p style={styles.error}>{error}</p>}
        </form>
    );
};

export default ContactForm;
