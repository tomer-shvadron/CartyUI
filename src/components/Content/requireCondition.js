import React from 'react';
import {Redirect} from 'react-router-dom';

var requireCondition = (WrappedComponent, condition, redirectTo = "/") => {
    return class extends React.Component {
        render() {
            if (!condition()) {
                return (<Redirect to={redirectTo}/>);
            }

            return <WrappedComponent />;
        }
    };
};

export default requireCondition;