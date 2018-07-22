import React from 'react';
import PropTypes from 'prop-types';

export default class ClassComponent extends React.Component {
    
    //optimize performance
    //only upadte the DOM when necessary
    //alternatively: we can use React.PureComponent
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.guestname !== nextProps.guestname)
    }

    render() {
        return (
            <h1>Hello {this.props.guestname}</h1>
        )
    }
}

ClassComponent.propTypes = {
    guestname: PropTypes.string.isRequired
}