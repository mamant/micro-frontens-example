import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import { Row, Col } from '@sumup/circuit-ui';
import './styles/basic.css';
const InvoicingApp = lazy(() => import('./components/InvoicingApp'));
const AccountingApp = lazy(() => import('./components/AccountingApp'));

import { light } from '@sumup/design-tokens';
import { ThemeProvider } from 'emotion-theming';

const history = createBrowserHistory();

const App = () => {
    useEffect(() => {
          history.push('/invoices');
    }, []);

    return (
        <ThemeProvider theme={light}>
            <Router history={history}>
                    <Row>
                        <Col span='3'>
                            <Navigation />
                        </Col>
                        <Col span='9'>
                            <Suspense fallback={<Loading />}>
                                <Switch>
                                    <Route path="/invoices">
                                        <InvoicingApp />
                                    </Route>
                                    <Route path="/expenses">
                                        <AccountingApp />
                                    </Route>
                                </Switch>
                            </Suspense>
                        </Col>
                    </Row>
            </Router>
        </ThemeProvider>
    );   
};

export default App;

