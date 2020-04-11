import React from 'react';
import AttackCard from '../shared/AttackCard';

export default class HomePage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col s6">
                        <AttackCard/>
                    </div>
                    <div className="col s6">
                        <AttackCard/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <AttackCard/>
                    </div>
                    <div className="col s6">
                        <AttackCard/>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}