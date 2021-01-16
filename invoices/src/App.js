import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { light } from '@sumup/design-tokens';
import { ThemeProvider } from 'emotion-theming';

import invocieForm from './components/invoiceForm.js';
import invociesList from './components/invoicesList';

const App = () => {
    return (<>
        <ThemeProvider theme={light}>
           <BrowserRouter>
            <Switch>
                <Route exact path='/invocie' component={invocieForm} />
                <Route path='/' component={invociesList} />
            </Switch>
           </BrowserRouter>
        </ThemeProvider>
    </>);
};

export default App;
