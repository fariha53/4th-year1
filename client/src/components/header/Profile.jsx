import { Typography, Menu, MenuItem, Box, styled } from '@mui/material';


const Profile = ({account})=>{
   return(
    <Box onClick={handleClick}><Typography style={{ marginTop: 2 }}>{account}</Typography></Box>
    
   )
}
export default Profile;