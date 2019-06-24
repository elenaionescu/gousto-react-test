import React from 'react';

const Error = ({error}) => error ? <p>{error}</p> : null;

export default Error;