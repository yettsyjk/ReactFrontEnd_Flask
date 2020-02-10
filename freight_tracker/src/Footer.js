import React, { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';

class FooterContainer extends Component {

    render () {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col 16 s12">
                            <Menu className="black-text text-lighten-3">Footer Content 
                                <Menu.Item disabled>
                                    (c) Copyright
                                </Menu.Item>
                                <Menu.Item disabled>
                                    <Input disabled label="Author: "/> 
                                </Menu.Item>
                                <Menu.Item disabled>
                                    <Input disabled label="Date: "/> 
                                </Menu.Item>
                            </Menu>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterContainer;