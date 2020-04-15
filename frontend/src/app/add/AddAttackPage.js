import React from 'react';
import {
    Grid,
    Divider,
    Paper,
    Typography,
    Button,
    TextField } from '@material-ui/core';

export default class AddAttackPage extends React.Component {

    render() {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h6" noWrap>Add a new 3 star attack to the Database</Typography>
                    <Divider/>
                </Grid>
                <Grid item md={6} xs={12} className="form-cell-centered">
                    <Paper className="form-image form-expanded" elevation={3}>Select a picture of the base</Paper>
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
                    <Grid container direction="column" spacing={4}>
                        <Grid item>
                            <TextField
                                multiline
                                label="Link to the Video"
                                placeholder="https://..."
                                variant="outlined"
                                rows="8"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                select
                                label="Town Hall Level"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" noWrap>Now lets add some info...</Typography>
                </Grid>

            </Grid>
        );
    }

}