import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { TextField, Button, Box, Paper, Typography, CircularProgress } from '@mui/material';

const FormPage = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        phoneNumber: '',
        email: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (value) => {
        setFormData({ ...formData, phoneNumber: `+${value}` });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                'https://qd37t1aehk.execute-api.ap-south-1.amazonaws.com/Aristomax/Bank-Conversational-Ai',
                {
                    sessionInfo: {
                        parameters: {
                            token: "6702cf3a7e97e70bbbea9af17bb58f15ea4d83debfe553ef45a327957f0a4bda",
                        },
                    },
                    fulfillmentInfo: {
                        tag: 'inputBankDetail',
                    },
                    ...formData,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            navigate('/results', { state: response.data });

        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else {
                console.error('Error message:', error.message);
            }
            if (error.response) {
                alert(`Error: ${error.response.data?.message || 'An unexpected error occurred.'}\nStatus: ${error.response.status}`);
            } else if (error.request) {
                alert('No response received from the server. Please check your network connection.');
            } else {
                alert(`Request failed: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '77vh', padding: 2 }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: '100%' }}>
                <Typography variant="h4" gutterBottom>
                    Caller Details:
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Full Name"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <Box sx={{ margin: 'normal', width: '100%' }}>
                        <PhoneInput
                            country={'in'}
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            inputStyle={{
                                width: '100%',
                                height: '56px',
                                fontSize: '16px',
                            }}
                            buttonStyle={{
                                height: '56px',
                            }}
                        />
                    </Box>
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" fullWidth disabled={loading}
                        sx={{
                            backgroundColor: '#0D9ECA',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#0B7A9C',
                            },
                        }}
                    >
                        {loading ? <CircularProgress size={24} /> : 'Submit'}
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default FormPage;