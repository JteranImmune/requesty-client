import Text from '../../atoms/Text';
import Flex from '../../utility/Flex';
import { Link } from 'react-router-dom';
import NavItem from './../../molecules/NavItem'
import Icon from '../../atoms/Icon';

const SideBar = () =>{
    return (
        <Flex direction="column" justify="space-between" bg="dark" maxWidth="xsm" height="100vh">
           <Flex direction="column" padding="2rem 0 0 0" gap="large">    
                <Flex direction="column" padding="0rem 1rem 0rem 1.5rem" width="100%" flex="0 1 0">
                    <Link to='/'>
                        <img src='https://res.cloudinary.com/di71nzbmn/image/upload/f_auto,q_auto/yld3sgrqd4j1p5nkwegw' alt='Logo'/>
                    </Link>
                </Flex>
                <Flex direction="column" justify="flex-start" gap="small" padding="0rem 1rem" > 
                    <NavItem to="/dashboard" icon='FaThLarge'><Text>Dasboard</Text></NavItem>
                    <NavItem to="/request" icon='FaTasks'><Text>Request</Text></NavItem>
                    <NavItem
                        icon='FaUser'
                        dropdownItems={[
                            { to: '/team', label: 'Team', icon:'FaHome' },
                            { to: '/clients', label: 'Clients', icon:'FaHome' },
                        ]}
                        >
                        Users
                    </NavItem>
                </Flex>
            </Flex> 
        </Flex>
    )
};

export default SideBar;