import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body,  Right, Switch} from 'native-base';
import {ImageBackground, Image, View}  from 'react-native';

const data = [
  {
      icon: 'home',
      label: 'Home',
      target: 'Home'
  },
  {
    
      icon: 'book',
      label: 'Books',
      target: 'Book'
  },
  {
      
      icon: 'add',
      label: 'Counter Decrement',
      target: 'CounterDecrement'
  },
  {
      
      icon: 'remove',
      label: 'Counter Increment',
      target: 'CounterIncrement'
  },
];

 class CostumDrawer extends Component {
 
  openDrawer() {
    this.props.navigation.openDrawer();
  }
  closeDrawer () {
    this.props.navigation.closeDrawer();
  }

  goTo= (target) => {
    this.props.navigation.navigate(target);
  this.closeDrawer();
  };

  renderListItem(data, index) {
    return (
        <ListItem key={'item-' + index} icon onPress={() => this.goTo(data.target)}>
            <Left>
                <Icon active name={data.icon}/>
            </Left>
            <Body>
                <Text>{data.label}</Text>
            </Body>
        </ListItem>
    );
}
  render() {
    return (
      <Container>
        <Content>

          <ImageBackground
            source={require('../../asset/lg.jpg')}
            resizeMode="cover"
            style={{
              height: 130,
              alignself: "stretch",
              justifyContent: "center",
              alignItems: "center"

            }}
          >
            <Image 
            source={require('../../asset/profil.jpg')}
           
            style={{
              width:60,
              height: 60,
              borderRadius:50,
            }}
            />
            <Text>Ryansomnia</Text>
          </ImageBackground>

          {data.map((item, index) => this.renderListItem(item, index))}

        </Content>
      </Container>
    );
  }
}
export default CostumDrawer;
