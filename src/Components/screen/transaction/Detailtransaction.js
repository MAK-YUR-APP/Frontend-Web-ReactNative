import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity, Footer, FooterTab } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import App from './src/Components/screen/Home/backgou';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SearchScreen extends Component {
    static navigationOptions = {
        headerShown: false,
        tabBarVisible: true,
    };
    render() {
        console.disableYellowBox = true
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor="#35B829" barStyle="light-content" />
                    <View >
                        <View style={{ backgroundColor: '#35B829', height: 60, flexDirection: 'row' }} >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Account')}>
                                <Icon onPress={() => this.props.navigation.navigate('Transaction')} name="arrow-left-circle" style={{ fontSize: 40, left: 10, color: 'white', position: 'absolute', top: 10 }}></Icon>

                            </View>
                            <View style={{ flex: 5, justifyContent: 'center' }}>
                                {/* <Icon name="cart" style={{ fontSize: 30, left: 16, color: 'white', position: 'absolute', top: 15 }}></Icon> */}
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 22, color: 'white' }}>Detail</Text>
                                </View>
                            </View>
                        </View>

                        <View >
                            <View style={{ marginVertical: 10, backgroundColor: '#bbb3b361', padding: 10 }}>
                                <Text>Penerima</Text>
                            </View>
                            <View style={{ flex: 1, padding: 10 }}>
                                <Text>Nama Penerima</Text>
                                <Text>Nomer Telephone</Text>
                                <Text>ID Province, ID City, ID Subscity
                                </Text>
                                <Text>Alamat</Text>
                            </View>
                            <View style={{ marginVertical: 10, backgroundColor: '#bbb3b361', padding: 10, top: 80 }}>
                                <Text>List Barang</Text>
                            </View>
                            {/* Mapping disini */}

                            <View style={{ marginVertical: 10, top: -20, padding: 10, top: 70, maxHeight: 200, height: 200 }}>
                                <ScrollView >
                                    <View style={{ height: 70, borderColor: '#a3a3a3', borderWidth: 0.25 }}>
                                        <View style={{ padding: 0, flexDirection: 'row', top: 10 }}>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                {/* <Text>List Barang</Text> */}
                                                <Image source={require('../../../../android/img/5d492f045d831.jpg')} style={{ width: 50, height: 50, borderRadius: 5 }} />
                                            </View>
                                            <View style={{ flex: 2 }}>
                                                <Text ellipsizeMode='tail' numberOfLines={1}>Wortel</Text>
                                                <Text style={{ top: 5 }} ellipsizeMode='tail' numberOfLines={1}>Rp. 12000/5000KG</Text>
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text>QTY</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={{ marginVertical: 70, justifyContent: 'center', alignItems: 'center', height: 63, borderTopColor: '#a3a3a3', borderTopWidth: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 2 }}>
                                    <Text style={{ paddingLeft: 20, fontSize: 10 }}>Tanggal : </Text>
                                    <Text style={{ paddingLeft: 20, fontSize: 15 }}>20 Maret 2050</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 10 }}>Total harga : </Text>

                                    <Text style={{ fontSize: 15, top: 3 }}> Rp. 26000 </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View >
        )
    }
}

export default SearchScreen