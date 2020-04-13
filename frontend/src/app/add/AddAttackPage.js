import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';

export default class AddAttackPage extends React.Component {

    render() {
        return (
            <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                    <Paper className="form-image" />
                    <input
                        accept="image/*"
                        className="hidden"
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Upload
                        </Button>
                    </label>
                </Grid>
                <Grid item md={6} xs={12}>
                    link para o video
                </Grid>

            </Grid>
        );
    }

}