import React from 'react';
import Header from './components/Header.jsx';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

export default class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.users = [
            {
                name: "John Doe",
                rule: "Engineer",
                hobbies: ["Surfing", "Traveling", "Reading"]
            },
            {
                name: "Ricard Maxy",
                rule: "Developer",
                hobbies: ["Music", "Reading", "Soccer"]
            },
            ,
            {
                name: "Julia",
                rule: "Marketing",
                hobbies: ["Reading", "Yoga"]
            }
        ]
        this.state = {
            user: this.users[0]
        }
    }
    
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            user: this.users[Math.round(Math.random()) * (this.users.length-1)]
        })
    }
    
    //optimize performance
    //only upadte the DOM when necessary
    //alternatively: use React.PureComponent
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.guestname !== this.props.guestname || nextState.user !== this.state.user 
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <section>
                    <ClassComponent guestname={this.props.guestname}/>
                    <FunctionalComponent name={this.state.user.name} rule={this.state.user.rule} hobbies={this.state.user.hobbies}/>
                </section>
            </React.Fragment>
        );
    }
}