import{AppBar, Toolbar, styled,Typography, Box} from '@mui/material';
//components
import Search from './Search';
import CustomerButtons from './CustomButtons';


const StyledHeader = styled(AppBar)`
background: #20b2aa;
height: 55px;
`;
const Component = styled(Box)`
margin-left:12%;
line-height:0;
`


const CustomerButtonsWrapper = styled(Box)`
margin: 0 5% 0 auto;

`


const Header = () =>{


    const logoURL = 'https://i.ibb.co/fv5ZZQd/profile.png'
    return(
        <StyledHeader>
            <Toolbar>
               <Component>
                    <img src={logoURL} alt="logo" style={{width:100}} />
                    <Box>

                </Box>
                </Component>
               
                <Search/>
                <CustomerButtonsWrapper>
                    <CustomerButtons/>
                </CustomerButtonsWrapper>

            </Toolbar>
        </StyledHeader>
    )
}
export default Header;