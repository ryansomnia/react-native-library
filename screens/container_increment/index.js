import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { increment } from '../../src/actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CostumHeader from '../../src/components/costumheader';
class Counter extends Component {
    render() {
        console.log(this.props.count);
        return (
            <Container>

                <CostumHeader navigation={this.props.navigation} title="Increament"></CostumHeader>
                <Content padder>

                    <Card>
                        <CardItem>
                            <Text>
                                {this.props.count}
                            </Text>
                        </CardItem>
                    </Card>

                    <Button info full onPress={() => this.props.increment()}>
                        <Text>Next</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        count: state.count
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ increment: increment }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);
