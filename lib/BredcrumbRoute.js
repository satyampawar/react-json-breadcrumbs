import React from 'react';
import BreadcumbWizard from './BreadcumbWizard'
import { Router, Link, Route, Switch, NavLink,Redirect} from 'react-router-dom';

export const BredcrumbRoute = ({ component, exact = true, path, jsonData,separator = '>', rootPathImg='https://image.flaticon.com/icons/svg/25/25694.svg' }) => (
  <Route
    exact={exact}
    path={path}
    render={props => {
      return (
        <React.Fragment>
        <BreadcumbWizard routePath={path} separator={separator} rootPathImg={rootPathImg} jsonData={jsonData} props={props}/>
        {React.createElement(component, props)}
        </React.Fragment>
    )}}
  />
);
