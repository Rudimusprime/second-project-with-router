import React from 'react';
import {Route} from "react-router-dom";

const permission = false;

const AdminPage = () => {
    return (
        <>
            <Route redner={() => (
                permission ? (<h3>Panel admina - dzień dobry</h3>) : ("xd")
            )}/>
        </>
    );
}

export default AdminPage;