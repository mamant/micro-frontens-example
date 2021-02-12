import React from 'react';
import { Link } from 'react-router-dom';
import { Heading} from '@sumup/circuit-ui';

const InvoiceForm = () => {
  return <>
    <Link to='/invoices'>Go Back</Link>
    <br/>
    <Heading> Invoices list </Heading>
 </>
};

export default InvoiceForm;