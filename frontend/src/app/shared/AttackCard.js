import React from 'react';

export default class AttackCard extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src="https://cocbases.com/wp-content/uploads/2-8.jpg" alt="bla"/>
                    <a className="btn-floating halfway-fab waves-effect waves-light blue"
                       href="https://www.youtube.com/watch?v=-DZtR0tMla0&t=2139s"><i
                        className="material-icons">videocam</i></a>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
            </div>
        );
    }
}