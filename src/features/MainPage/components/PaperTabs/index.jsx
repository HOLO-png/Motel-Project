
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RentPage from '../RentPage';
import './styles.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

PaperTabs.defaultProps  = {
  list: {}
};

export default function PaperTabs({list}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${classes.root} paper-tabs`}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="paper-tabs__tabs">
          <Tab label={list.label1} {...a11yProps(0)} className="paper-tabs__tab"/>
          <Tab label={list.label2} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel component={'div'} value={value} index={0}>
        {list.data1}
      </TabPanel>
      <TabPanel component={'div'} value={value} index={1}>
        {list.data2}
      </TabPanel>
    </div>
  );
}