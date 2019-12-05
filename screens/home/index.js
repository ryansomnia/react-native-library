import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Card, CardItem, Thumbnail, Left, Body, Icon, Text,
   View, DeckSwiper
} from 'native-base';
import CostumHeader from '../../src/components/costumheader';

const cards = [
  {
    text: 'WELLCOME TO OUR LIBRARY',
    name: 'One',
    image: require('../../asset/toko-buku.jpg'),
    quotes:'Aplikasi ini membantu anda untuk memanagemen buku-buku yang anda miliki',
  },
  {
    text: 'Tahukah Kamu?',
    name: 'Awal mula penggunaan buku',
    image: require('../../asset/papyrus.jpg'),
    quotes:'Buku pertama dibuat sekitar 2000 BC oleh orang mesir kuno yang menggunakan lapisan papirus',
  },
];
export default class HomeScreen extends Component {

  render() {
    return (
      <Container style={{ backgroundColor: '#F5F0E3' }}> 
        <CostumHeader navigation={this.props.navigation} title="Home"></CostumHeader>

       
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem >
                  <Left>
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>Buku adalah jendela dunia 
                     </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                 
                  <Text>{item.quotes}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}