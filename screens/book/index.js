import React, { Component } from 'react';
import {
    Container, Header, Input, Title,
     Form, Content, Footer, Fab,
    FooterTab, Button, Left, Right,
    Body, Icon, Text, ListItem, View, List, Item, Label, Toast, 
} from 'native-base';
import CostumHeader from '../../src/components/costumheader';
import { findAllBooks, deleteBook } from '../../src/actions/book';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RefreshControl, Alert } from 'react-native';

class BookScreen extends Component {

    componentDidMount() {
        this.reload();
    }
    componentDidUpdate(prevProps, prevState) {
        const { error, editBook, deleteBook, addBook } = this.props;
        if ((addBook && prevProps.addBook !== addBook) ||
            (editBook && prevProps.editBook !== editBook) ||
            (deleteBook && prevProps.deleteBook == null)) {
            this.reload();
        }
    }

    

    reload() {
        this.props.findAllBooks();
    }
    showDetail(id) {
        this.props.navigation.navigate('BookDetail', { id })
    }
    delete(data) {
        Alert.alert(
            'Confirmation',
            'Kamu serius mau hapus data \'' + data.title + '\'?',
            [
                {
                    text: 'Batal',
                    style: 'cancel',
                },
                {
                    text: 'Hapus',
                    onPress: () => {
                        this.props.deleteBook(data.id);
                        this.reload();
                    }

                }
            ]
        )
        this.props.navigation.navigate('BookScreen');


    }

    renderListItem(data, index) {
        return (
            <ListItem key={'item-' + index} onPress={() => this.showDetail(data.id)}>
                <Body style={{ borderBottomWidth: 0 }}>
                <Icon 
                    name="bookmarks"
                        style={{ flex: 1, color: "#FF6F5E" }}>
                    <Text>{" "+ data.title}</Text>
                    </Icon>
                </Body>

                <Right>
                    <Icon 
                    onPress={() => this.delete(data)} name="trash"
                        style={{ flex: 1, color: "#FF6F5E" }}></Icon>
                </Right>
            </ListItem>
        );
    }

    render() {
        const { error } = this.props;
        return (
            <Container style={{ backgroundColor: '#F5F0E3' }}>
                <CostumHeader navigation={this.props.navigation} title={"Books"} />
                <Content
                    refreshControl={
                        <RefreshControl refreshing={this.props.loading}
                            onRefresh={() => this.reload()} />}>
                    {this.props.book.map((data, index) => this.renderListItem(data, index))}

                </Content>
                
                    <Fab

                        style={{ backgroundColor: '#40BFC1' }}
                        direction="up"
                        position="bottomRight"
                        onPress={() => this.props.navigation
                        .navigate("bookAdd")}>
                        <Icon name="add" />
                    </Fab>
               
                {
                    error && Toast.show({
                        text: error.message,
                        buttonText: "Ok",
                        type: "danger",
                        duration: 5000
                    })
                }
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        loading: state.book.loading,
        book: state.book.data,
        error: state.book.error,
        editBook: state.editBook.data,
        deleteBook: state.deleteBook.data,
        addBook: state.addBook.data
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ findAllBooks, deleteBook }, dispatch)
}
export default connect(
    mapStateToProps,
    matchDispatchToProps
)
    (BookScreen);