import React from 'react';
import PropTypes from 'prop-types';

const FunctionalComponent = ({name, rule, hobbies}) => {
    const listHobby = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);
    return (
        <div>
            <p>My name is {name}, a {rule}</p>
            <ul>{listHobby}</ul>
        </div>
    );
}

FunctionalComponent.propTypes = {
    name: PropTypes.string.isRequired,
    rule: PropTypes.string.isRequired,
    hobbies: PropTypes.array.isRequired
}

export default FunctionalComponent