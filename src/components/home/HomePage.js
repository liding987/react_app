import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Home</h1>
                <p>React and Redux in ES6</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
                {/* <Link to="course" className="btn btn-primary btn-lg">Courses</Link> */}
            </div>
        );
    }
}

export default HomePage;