import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

function App({ children }) {
  return (
    <div>
      <Grid
        container
        spacing={24}
      >
        <Grid
          item
          xs={12}
        >
          <Paper>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
App.defaultProps = {};

export default App;
