import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '@sumup/circuit-ui';

const exspenseForm = () => {
  return <>
     <Link to='/expenses'>Go Back</Link>
     <br/>
     <Heading>Expense form</Heading>
    </>
};

export default exspenseForm;