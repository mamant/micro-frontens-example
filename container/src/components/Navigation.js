import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '@sumup/circuit-ui';
import styled from '@emotion/styled';

const StyledHeader = styled.div`
  max-width: 300px;
  overflow: hidden;
  height: 100vh;
`;

const Navigation = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(1);

  return (<React.Fragment>
    <StyledHeader>
      <Sidebar open={open} onClose={() => setOpen(false)} closeButtonLabel='close-button'>
            <Sidebar.Header>Micro Debitoor</Sidebar.Header>
            <Link to='/invoices'>
              <Sidebar.NavItem
                key="home"
                label="Invoices"
                selected={selected === 1}
                onClick={() => selected(1)}
                />
            </Link>
            <Link to='/expenses'>
              <Sidebar.NavItem
                key="home"
                label="Expenses"
                selected={selected === 1}
                onClick={() => selected(1)}
                />
            </Link>
      </Sidebar>
    </StyledHeader>
</React.Fragment>);
};

export default Navigation;
