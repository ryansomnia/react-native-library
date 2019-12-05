import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { increment, decrement } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class Counter extends Component{
  render(){
    console.log(this.props.count);
    return(
      <Container>
        <Header>
          <Body>
            <Title>Menghitung janji manis</Title>
          </Body>
        </Header>
        <Content padder>
          
          <Button info full onPress= {() => this.props.increment()}>
            <Text>Next</Text>
          </Button>
          <Card>
            <CardItem>
              <Text>
                {this.props.count}
              </Text>
            </CardItem>
          </Card>
          <Button danger full onPress= {() => this.props.decrement()}>
            <Text>Prev</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    count : state.count
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({increment: increment, decrement: decrement}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);
