import React, {Component} from 'react';
import { Button } from 'galio-framework';
import CustomHeader from '../../src/components/costumheader';
import { Container, Content,Form, Item, Input,
     Label,Text,View, Icon,
    Spinner, Toast } from 'native-base';
import { RefreshControl } from 'react-native';
import { addBook } from '../../src/actions/book';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class bookAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: null,
            publisher: null,
            price: null,
            stock: null
        }
    }

    cancel() {
        this.props.navigation.navigate('Book');
    }
    onSubmit() {
        const newData = {
            id: this.state.id,
            title: this.state.title,
            publisher: this.state.publisher,
            price: this.state.price,
            stock: this.state.stock,
        }
        this.props.addBook(newData);
        this.props.navigation.navigate('Book');
    }

    render() {
        const { loading, navigation } = this.props;
        return (
            <Container>
                <CustomHeader  disableBackButton={true} navigation={this.props.navigation} title="Add Book" />
                <Content padder 
                
                refreshControl={
                <RefreshControl refreshing={this.props.loading} 
                onRefresh={() => this.reload} />}>

                    <Form>
                        <Item floatingLabel >
                            <Label>Id</Label>
                            <Input
                            leftIcon={
                                <Icon
                                  name='user'
                                  size={24}
                                  color='black'
                                />
                              }
                                onChangeText={(id) => this.setState({ id })}
                                value={this.state.id ? "" + this.state.id : ''}
                            />
                        </Item>
                        <Item floatingLabel >
                            <Label>Book Title</Label>
                            <Input
                                onChangeText={(title) => this.setState({ title })}
                                value={this.state.title}
                            />
                        </Item>
                        <Item floatingLabel >
                            <Label>Book Publisher</Label>
                            <Input
                                onChangeText={(publisher) => this.setState({ publisher })}
                                value={this.state.publisher}
                            />
                        </Item>
                        <Item floatingLabel >
                            <Label>Price</Label>
                            <Input
                                onChangeText={(price) => this.setState({ price })}
                                value={this.state.price ? "" + this.state.price : ""} />
                        </Item>
                        <Item floatingLabel >
                            <Label>Stock</Label>

                            <Input onChangeText={(stock) => this.setState({ stock })} value={this.state.stock ? "" + this.state.stock : ""} />
                        </Item>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, height: 65 }}>
                            <Button
                            color="#FD866E"
                            onPress={() => this.onSubmit()} 
                            style={{ marginTop: 10, borderRadius: 50, width: 100, alignSelf: 'center', justifyContent: 'center', marginRight: 10 }}>
                                <Text
                                 style={{ color:"#FFF"}}
                                >Save</Text>
                            </Button>
                            
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

function mapStatetoProps(state) {
    return {
        loading     : state.addBook.loading,
        addBook       : state.addBook.data,
        error       : state.addBook.error  
       
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({addBook}, dispatch)
}

export default connect(mapStatetoProps, matchDispatchToProps)(bookAdd);
