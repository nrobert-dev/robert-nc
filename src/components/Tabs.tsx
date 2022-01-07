import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {THEME} from "../utils";


interface TabComponentProps {
  tabs : string[],
  tabChildren : JSX.Element[]
}

interface TabPanelProps {
  value : number,
  index : number
  children : JSX.Element[] | JSX.Element,
  dir : string
}

interface StyledTabsProps {
  value : number,
  onChange : (a:any, i:number) => void,
  [propName: string]: any;
}

interface StyledTabProps {
  label : string
}


const StyledTabs = styled((props : StyledTabsProps) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      },
    '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: THEME.secondary
    },
  });
const StyledTab = styled((props : StyledTabProps) => <Tab disableRipple {...props} />)(
    () => ({
      color: THEME.text.main,
      fontWeight : 600,
      '&.Mui-selected': {
        color: THEME.secondary
      },
    }),
  );





function TabPanel(props : TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>
            {children}
          </div>
        )}
      </div>
    );
  }
  
  function a11yProps(index : number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

const TabsComponent = (props : TabComponentProps) => {
    const {tabs, tabChildren} = props;
    const [currentTab, setCurrentTab] = useState<number>(0);

    return(
        <div style={{width : '100%'}}>
               <StyledTabs
                value={currentTab}
                onChange={(_ : any, value : number) => setCurrentTab(value)}
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                {tabs.map(t => <StyledTab label={t} {...a11yProps(0)}/>)}
            </StyledTabs>
            <SwipeableViews
                axis={'x'}
                index={currentTab}
                onChangeIndex={(index : number) => setCurrentTab(index)}>
                  {tabChildren.map((tabContent,index) => 
                  <TabPanel value={currentTab} index={index} dir={'x'}>
                      {tabContent}
                  </TabPanel>)}
            </SwipeableViews>
        </div>
    )
};

export default TabsComponent;