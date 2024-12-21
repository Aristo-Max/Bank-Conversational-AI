import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, Button, Grid } from '@mui/material';

const ResultsPage = () => {
    const location = useLocation();
    const data = location.state || {};

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '130vh', padding: 2 }}>
            <Grid container spacing={3} sx={{ width: '100%', maxWidth: 1200 }}>
                {/* First Row */}
                <Grid item xs={12}>
                    <Paper
                        elevation={6}
                        sx={{
                            padding: 4,
                            borderRadius: '16px',
                            backgroundColor: "#ecf0f1",
                            height: 250, // Increased height for better spacing
                            boxShadow: '1 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
                        }}
                    >
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                textAlign: 'center',
                                color: '#2980b9',
                                fontWeight: 'bold',
                                marginBottom: 2 // Added margin for spacing
                            }}
                        >
                            Engage with Our Conversational AI Agent Now!!
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                marginTop: 1,
                                color: '#34495E', // Darker text for better readability
                                lineHeight: 1.5 // Improved line height for readability
                            }}
                        >
                            Experience the future of banking with our conversational AI agent, designed to provide personalized interactions and seamless banking services.<br />
                            Use the information provided below for a more engaging experience. For a quick demo, call our AI Bank Agent at:
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                marginTop: 1,
                                fontWeight: 'bold',
                                fontSize: '1.5rem', // Slightly larger font size for emphasis
                                color: '#2980b9'
                            }}
                        >
                            📞 +1 3239189240
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                display: 'block',
                                margin: '20px auto',
                                width: '128px', // Slightly wider button
                                padding: '10px', // Added padding for better touch target
                                fontWeight: 'bold' // Bold text for emphasis
                            }}
                            component="a"
                            href="tel:+13239189240"
                        >
                            Call AI Agent
                        </Button>
                    </Paper>
                </Grid>
                {/* Second Row */}
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <Paper elevation={6} sx={{ padding: 3, borderRadius: '16px', height: 200 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2C3E50' }}>Customer Details</Typography>
                            {data.Customer ? (
                                <>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Full Name: <span style={{ color: '#4A6378' }}>{data.Customer.Name}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Phone: <span style={{ color: '#4A6378' }}>{data.Customer.Phone}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Email: <span style={{ color: '#4A6378' }}>{data.Customer.Email}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Credit Score: <span style={{ color: '#4A6378' }}>{data.Customer.CreditScore}</span></Typography>
                                </>
                            ) : (
                                <Typography sx={{ color: '#E74C3C' }}>No customer data available</Typography>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={6} sx={{ padding: 3, borderRadius: '16px', height: 200 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2C3E50' }}>Bank Account Details:</Typography>
                            {data.BankAccount ? (
                                <>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Account Number: <span style={{ color: '#4A6378' }}>{data.BankAccount.AccountNumber}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Account Type: <span style={{ color: '#4A6378' }}>{data.BankAccount.AccountType} Account</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Balance: <span style={{ color: '#4A6378' }}>₹{data.BankAccount.Balance}</span></Typography>
                                </>
                            ) : (
                                <Typography sx={{ color: '#E74C3C' }}>No bank account data available</Typography>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={6} sx={{ padding: 3, borderRadius: '16px', height: 200 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2C3E50' }}>Loan Details:</Typography>
                            {data.LoanDetails ? (
                                <>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Loan Type: <span style={{ color: '#4A6378' }}>{data.LoanDetails.LoanType} Loan</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Loan Amount: <span style={{ color: '#4A6378' }}>₹{data.LoanDetails.LoanAmount}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Outstanding Amount: <span style={{ color: '#4A6378' }}>₹{data.LoanDetails.OutstandingAmount}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>EMI: <span style={{ color: '#4A6378' }}>₹{data.LoanDetails.EMIAmount}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Next EMI Date: <span style={{ color: '#4A6378' }}>{data.LoanDetails.EMIDueDate}</span></Typography>
                                </>
                            ) : (
                                <Typography sx={{ color: '#E74C3E' }}>No loan data available</Typography>
                            )}
                        </Paper>
                    </Grid>
                </Grid>

                {/* Third Row */}
                <Grid container item xs={12} spacing={3} justifyContent="center">
                    <Grid item xs={4}>
                        <Paper elevation={6} sx={{ padding: 3, borderRadius: '16px', height: 200 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2C3E50' }}>Fixed Deposit Details</Typography>
                            {data.FixedDeposit ? (
                                <>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Invested Amount: <span style={{ color: '#4A6378' }}>₹{data.FixedDeposit.InvestedAmount}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Maturity Amount: <span style={{ color: '#4A6378' }}>₹{data.FixedDeposit.MaturityAmount}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Invested Date: <span style={{ color: '#4A6378' }}>{data.FixedDeposit.InvestedDate}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Maturity Date: <span style={{ color: '#4A6378' }}>{data.FixedDeposit.MaturityDate}</span></Typography>
                                </>
                            ) : (
                                <Typography sx={{ color: '#E74C3C' }}>No fixed deposit data available</Typography>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={6} sx={{ padding: 3, borderRadius: '16px', height: 200 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#2C3E50' }}>Recurring Deposit Details</Typography>
                            {data.RecurringDeposit ? (
                                <>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Monthly Invested: <span style={{ color: '#4A6378' }}>₹{data.RecurringDeposit.MonthlyInvestedAmount}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Maturity Amount: <span style={{ color: '#4A6378' }}>₹{data.RecurringDeposit.MaturityAmount}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Start Date: <span style={{ color: '#4A6378' }}>{data.RecurringDeposit.RDStartDate}</span></Typography>
                                    <Typography sx={{ color: '#2C3E50', fontWeight: 'bold' }}>Maturity Date: <span style={{ color: '#4A6378' }}>{data.RecurringDeposit.RDMaturityDate}</span></Typography>
                                </>
                            ) : (
                                <Typography sx={{ color: '#E74C3C' }}>No recurring deposit data available</Typography>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ResultsPage;