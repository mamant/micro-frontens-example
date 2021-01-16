import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { light } from '@sumup/design-tokens';
import { ThemeProvider } from 'emotion-theming';

import exspenseForm from './components/exspenseForm.js';
import expensesList from './components/expensesList';

const App = () => {
    return (<>
        <ThemeProvider theme={light}>
           <BrowserRouter>
            <Switch>
                <Route exact path='/expense' component={exspenseForm} />
                <Route path='/' component={expensesList} />
            </Switch>
           </BrowserRouter>
        </ThemeProvider>
    </>);
};

export default App;
