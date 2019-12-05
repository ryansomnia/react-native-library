import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as PropsType from 'prop-types';

class CostumHeader extends Component {
    openDrawer() {
        this.props.navigation.openDrawer();
    }

    static propsType = {
        navigation: PropsType.object,
        title: PropsType.string,
        disableBackButton: PropsType.bool
    };
  
    render() {
        const{navigation} = this.props;
        return (
            <Header
            style={{ backgroundColor: "#40BFC1" }}
            
            
            >
                <Left>
                    {this.props.disableBackButton ?
                        <Button
                        transparent
                        onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" style={{ color: '#FDF6F0' }} />
                    </Button> :
                       <Button
                            transparent 
                            onPress={() => navigation.openDrawer()}>
                            <Icon name="menu" style={{ color: '#FDF6F0' }} />
                        </Button> 
                       
                    }
                </Left>

                <Body>
                    <Title
                   style={{ backgroundColor: "#40BFC1" }}
                    >{this.props.title}</Title>
                </Body>

            </Header>
        )
    }
}

export default CostumHeader;