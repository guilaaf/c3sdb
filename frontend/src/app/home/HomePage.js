import React from 'react';
import Grid from '@material-ui/core/Grid';

import AttackCard from '../shared/AttackCard';

export default class HomePage extends React.Component {

    render() {
        return (
            <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                    <AttackCard/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <AttackCard/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <AttackCard/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <AttackCard/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <AttackCard/>
                </Grid>
            </Grid>
        );
    }

}