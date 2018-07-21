import React from 'react';
import PropTypes from 'prop-types';

export default class ClassComponent extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.guestname}</h1>
        )
    }
}

ClassComponent.propTypes = {
    guestname: PropTypes.string.isRequired
}