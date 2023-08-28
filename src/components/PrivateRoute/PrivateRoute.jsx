import PropTypes from 'prop-types';
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/selectors';

const PrivateRoute = ({children, redirectTo = '/' }) => {
    const authentification = useSelector(selectAuthentificated);
    return authentification ? children : <Navigate to={redirectTo} />;
}

PrivateRoute.propTypes = {
    children: PropTypes.any,
    redirectTo: PropTypes.string
};

export default PrivateRoute;