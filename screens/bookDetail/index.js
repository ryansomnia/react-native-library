import React, { Component } from 'react';
import { Container, Content, Text,
     Form, Item, Label,
      Input, Button, Icon } from 'native-base';
import CostumHeader from '../../src/components/costumheader';
import { findBook, editBook } from '../../src/actions/book';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RefreshControl } from "react-native";


class BookDetaiScreen extends Component {
    constructor(props) {
        super(props);

        const { navigation } = this.props;
        this.state = {
            id: navigation.getParam('id'),
            title: null,
            publisher: null,
            price: null,
            stock: null
        }

    }

    ComponentDidMount() {
        this.reload();
    }
componentDidUpdate(prevProps, prevState) {
        const { error, book } = this.props;

        if (book && prevProps.book !== book) {
            this.setState({
                id: book.id,
                title: book.title,
                publisher: book.publisher,
                price: book.price,
                stock: book.stock
                
            });
        } else if (error && prevProps.error !== error) {
            error && Toast.show({
                text: error.message,
                buttonText: "Ok",
                type: "danger"
            })
        }
    }
    reload() {
        if(this.state.id){
        this.props.findBook(this.state.id);
    }
    }
    cancel(){
        this.props.navigation.navigate('BookScreen');
    }
    update(){
        const data = {
            id : this.state.id,
            title : this.state.title,
            publisher : this.state.publisher,
            price : this.state.price,
            stock : this.state.stock,

    }
    this.props.editBook(this.state.id, data);
    this.props.navigation.navigate('Book');
  }

    render() {
        console.log('ini id ' + this.props.id);
        const { book, navigation } = this.props;
        var data = book || {};
        

        return (
            <Container>
                <CostumHeader disableBackButton={true} navigation={this.props.navigation} title="Book Detail" />
                <Content padder
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.loading}
                            onRefresh={() => this.reload()} />}>

                    <Text>This is Book Detail {navigation.getParam('id')}</Text>
                    <Form>
                        <Item floatinglabel >
                            <Label>Title</Label>

                            <Input
                                onChangeText={(title) => this.setState({ title })}
                                value={this.state.title} />
                        </Item>
                        <Item floatinglabel >
                            <Label>Publisher</Label>
                            <Input
                                onChangeText={(publisher) => this.setState({ publisher })}
                                value={this.state.publisher} />
                        </Item>
                        <Item floatinglabel >
                            <Label>Price</Label>
                            <Input
                                onChangeText={(price) => this.setState({ price })}
                                value={" " + this.state.price} />
                        </Item>
                        <Item floatinglabel >
                            <Label>Stock</Label>
                            <Input
                                onChangeText={(stock) => this.setState({ stock })}
                                value={" " +this.state.stock} />
                        </Item>
                    </Form>

                    <Button
                    iconLeft
                    onPress={() => this.update()} 
                    style={{ marginTop: 10, backgroundColor:'#FD866E', borderRadius: 50, 
                    width: 100, alignSelf: 'center', 
                    justifyContent: 'center', marginRight: 10 }}>
                        <Icon name='save' />       
                        <Text  style={{ color:"#FFF"}}>Save</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}


function mapStateToProps(state) {
    return {
        loading: state.detail.loading,
        book: state.detail.data,
        error: state.detail.error
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ findBook, editBook }, dispatch)
}
export default connect(
    mapStateToProps,
    matchDispatchToProps
)
    (BookDetaiScreen);