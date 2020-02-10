import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Menu } from 'semantic-ui-react';

class HeaderComponent extends Component {

    
    render() {
        return(
            
            <Header className="header_container">
                <Menu fixed="top" inverted>
                    <Container>
                        <Menu.Item><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item><Link to="/products">Inbound Freight</Link></Menu.Item>
                    </Container>
                </Menu>
            </Header>
        )
    }
};


export default HeaderComponent;