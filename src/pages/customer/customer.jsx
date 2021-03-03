import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header.jsx';
import EnhancedTable from '../../components/table/table.jsx';
import Footer from '../../components/fixed_footer/fixed_footer.jsx';
import "./customer.scss";

const Customers = () => {
    return (
        <div className="customer-container">
            <div className="header">
                <Header />
            </div>
            <div className="first-grid">
                <Grid >
                    <Paper >
                        <EnhancedTable />
                    </Paper>
                </Grid>
            </div>
            <div className="fixed-footer">
                <Footer />
            </div>
        </div>
    );    
}
export default Customers;
