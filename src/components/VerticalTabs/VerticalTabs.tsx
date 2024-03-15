import { Button, FormControl, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner'
import { UserOperations } from '../Services';

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
  const [dataItems, setDataItems] = useState({...data})
  const [isLoading, setLoading] = useState(true);
  const [updatedUser, setUpdatedUser] = useState({})

  const operations = new UserOperations()
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }
  const handleChange = (event:any) => {
    const {name, value} = event.target
    setUpdatedUser({...updatedUser, [name]:value})
  }
  const handleUpdate = async (item:any) => {
    const updatedItem = { ...item, ...updatedUser}
    setLoading(true)
    await operations.updateUser(updatedItem)
    const allUsers = await (await operations.fetchAllUsers()).json()
    setDataItems({items: allUsers})
    setLoading(false)
  }
  const handleDelete = async (id:number) => {
    const deleteOperation = await operations.deleteUser(id)
    if (deleteOperation) {
      setLoading(true);
      const allUsers = await (await operations.fetchAllUsers()).json()
      setDataItems({items: allUsers})
      setLoading(false);
    }
  }
  useEffect(() => { 
    setDataItems(data) 
    setLoading(false)
  }, [data])
  const { items } = dataItems
  if (isLoading) {
    return (
      <TailSpin color="red" radius={"8px"} />
    )
  } else {
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleTabChange}
        aria-label="User Management"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {
          items?.map((item: TabItemUserProps) => <Tab label={item.firstName} {...a11yProps(items.indexOf(item))} />)
        }
      </Tabs>
      {
          items?.map((item: TabItemUserProps) => 
            (<TabPanel value={value} index={items.indexOf(item)}>
            <FormControl  style={{"padding":"15"}}>
                <TextField label="ID" type='text' color='primary' name='id' defaultValue={item.id} InputProps={{readOnly:true}} /><div>&nbsp;</div>
                <TextField label="First Name" type='text' color='primary' name='firstName' defaultValue={item.firstName} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Last Name" type='text' color='primary' name='lastName' defaultValue={item.lastName} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Email" type='text' color='primary' name='email'defaultValue={item.email} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Phone" type='text' color='primary' name='phone' defaultValue={item.phone} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Date of Birth" type='date' color='primary' name='dateOfBirth' defaultValue={item.dateOfBirth} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Status" type='text' color='primary' name='status' defaultValue={item.status} onChange={handleChange} /><div>&nbsp;</div>
                <TextField label="Address" type='textarea' color='primary' name='address' defaultValue={item.address} onChange={handleChange} /><div>&nbsp;</div>
                <div>
                  <Button onClick={() => handleUpdate(item)}>Update</Button>
                  <Button onClick={() => handleDelete(Number(item.id))}>Delete</Button>
                </div>
            </FormControl>
          </TabPanel>)
        )
      }
    </Box>
  );

  }}