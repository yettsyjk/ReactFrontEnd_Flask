import React, { Component } from 'react';

class FooterComponent extends Component {

    render () {
        return (
            <div>
            <Menu>
                <Menu.Item disabled>
                    (c) Copyright
                </Menu.Item>
                <Menu.Item disabled>
                    <Input disabled lable="Author: "/>
                </Menu.Item>
                <Menu.Item disabled>
                    <Input disabled lable="Date: "/>
                </Menu.Item>
            </Menu>
            </div>
        );
    }
}

export default FooterComponent;