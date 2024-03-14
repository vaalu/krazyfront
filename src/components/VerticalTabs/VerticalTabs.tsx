import React, { ReactNode, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, FormControl, FormLabel, Grid, TextField } from '@mui/material';

const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export interface TabItemUserProps {
  id?: Number
  firstName?: string
  lastName?: string
  email?: string
  status?: string
  phone?: string
  dateOfBirth?: string
  address?: string
}
export interface TabItemsProps {
  items?: TabItemUserProps[]
}
export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export const VerticalTabs = (data: TabItemsProps) => {
  const [value, setValue] = React.useState(0);
  const formValues: TabItemUserProps = {}
  const [formValues, setFormValues] = useState({
      "id": 0,
      "firstName": "",
      "lastName": "",
      "email": "",
      "status": "",
      "phone": "",
      "dateOfBirth": "",
      "address": ""
  });
  const handleChange = (event:any) => {
    const { name, value } = event.target
    setFormValues((prevstate: any) => ({ ...prevstate, [name]: value }))
  }
  const handleUpdate = (event:any) => {
    console.log('Update button clicked', formValues)
  }
  const handleDelete = (event:any) => {
    console.log('Delete button clicked', formValues)
  }
  const { items } = data
  
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="User Management"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {
          items?.map((item: TabItemUserProps) => <Tab label={item.firstName} {...a11yProps(Number(item.id) - 1 | 0)} />)
        }
      </Tabs>
      {
          items?.map((item: TabItemUserProps) => 
          <TabPanel value={value} index={Number(item.id) -1 | 0}>
            <FormControl  style={{"padding":"15"}}>
                <TextField label="First Name" type='text' color='primary' name='firstName' defaultValue={item.firstName} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Last Name" type='text' color='primary' name='lastName' defaultValue={item.lastName} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Email" type='text' color='primary' name='email'defaultValue={item.email} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Phone" type='text' color='primary' name='phone' defaultValue={item.phone} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Date of Birth" type='date' color='primary' name='dateOfBirth' defaultValue={item.dateOfBirth} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Status" type='text' color='primary' name='status' defaultValue={item.status} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Address" type='textarea' color='primary' name='address' defaultValue={item.address} onChange={handleChange} /><div>&nbsp;</div>
                <div>
                  <Button onClick={handleUpdate}>Update</Button>
                  <Button onClick={handleDelete}>Delete</Button>
                </div>
            </FormControl>
          </TabPanel>
          )
      }
    </Box>
  );
}