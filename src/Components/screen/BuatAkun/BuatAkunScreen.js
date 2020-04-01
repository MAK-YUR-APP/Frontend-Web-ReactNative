import React, { Component } from 'react'
import { InputGroup, View, Container, Header, Item, Input, Button, Card, CardItem, Body, Picker } from 'native-base';
import { Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import App from './src/Components/screen/Home/backgou';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';

import { readProvince, readCity, readSubCity } from '../../redux/actions/region'
import { createAccount } from '../../redux/actions/auth'
import { connect } from 'react-redux';

class BuatAkunScreen extends Component {
    static navigationOptions = {
        headerShown: false,
        tabBarVisible: true,
        activeTintColor: 'blue',
        tabStyle: {
            backgroundColor: 'red'
        }
    };

    state = {
        selected: undefined,
        namePhoto: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        id_province: '' || 1,
        id_city: '' || 1,
        id_sub_city: '' || 1,
        address: '',
        no_telephone: '',
        image: null
    }

    componentDidMount() {
        this.props.dispatch(readProvince())
        this.props.dispatch(readCity())
        this.props.dispatch(readSubCity())
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchCamera(options, response => {
            if (response.uri) {
                this.setState({ image: response, namePhoto: response.fileName });
            }
        });
    };

    handleUploadPhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ image: response, namePhoto: response.fileName });
            }
        });
    };

    onSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData()
        data.append('email', this.state.email)
        data.append('first_name', this.state.first_name)
        data.append('last_name', this.state.last_name)
        data.append('password', this.state.password)
        data.append('id_province', this.state.id_province)
        data.append('id_city', this.state.id_city)
        data.append('id_sub_city', this.state.id_sub_city)
        data.append('address', this.state.address)
        data.append('no_telephone', this.state.no_telephone)
        if ((this.state.image === null) === true) {
            alert('Silahkan Login!')
            await this.props.dispatch(createAccount(data));
            await this.props.navigation.navigate('Login');
        } else if ((this.state.image === null) === false) {
            let File = {
                name: this.state.image.fileName,
                type: this.state.image.type,
                uri: this.state.image.uri
            }
            data.append('image', File)
            alert('Silahkan Login!')
            await this.props.dispatch(createAccount(data));
            await this.props.navigation.navigate('Login');
        }
    }

    render() {
        console.disableYellowBox = true
        const { image } = this.state;
        const { province, city, subcity } = this.props
        return (
            // <Text>hello</Text>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor="#35B829" barStyle="light-content" />
                    <View >
                        {/* <StatusBar hidden={route.statusBarHidden} /> */}
                        <View style={{ backgroundColor: '#35B829', height: 60, flexDirection: 'row' }}>
                            <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
                                <Text style={{ fontSize: 22, color: 'white' }}>Akun Baru</Text>
                            </View>
                        </View>

                        {/* mPping disini */}
                        <ScrollView >
                            <View style={{ padding: 20, maxHeight: 800, height: 650 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Item style={{ width: 100 }}>
                                            <Input placeholder="Nama Depan" onChangeText={(text) => this.setState({ first_name: text })} />
                                        </Item>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Item style={{ width: 100 }}>
                                            <Input placeholder="Nama Belakang" onChangeText={(text) => this.setState({ last_name: text })} />
                                        </Item>
                                    </View>
                                </View>
                                <View>
                                    <Item >
                                        <Input placeholder="Email" onChangeText={(text) => this.setState({ email: text })} />
                                    </Item>
                                </View>
                                <View>
                                    <Item>
                                        <Input placeholder="Password" secureTextEntry onChangeText={(text) => this.setState({ password: text })} />
                                    </Item>
                                </View>
                                <View>
                                    <Item >
                                        <Input placeholder="Nomer Telephone" keyboardType={'numeric'} onChangeText={(text) => this.setState({ no_telephone: text })} />
                                    </Item>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', top: 10, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Picker
                                            mode="dropdown"
                                            iosIcon={<Icon name="arrow-down" />}
                                            placeholder="Choose"
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            style={{ width: undefined }}
                                            selectedValue={(this.state && this.state.id_province)}
                                            onValueChange={(value) => {
                                                this.setState({ id_province: value });
                                            }}
                                        >
                                            {province.map((item, index) => {
                                                return (
                                                    <Picker.Item key={index} value={item.id} label={item.name_province} />
                                                )
                                            })}
                                        </Picker>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Picker
                                            mode="dropdown"
                                            iosIcon={<Icon name="arrow-down" />}
                                            placeholder="Choose"
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            style={{ width: undefined }}
                                            selectedValue={(this.state && this.state.id_city)}
                                            onValueChange={(value) => {
                                                this.setState({ id_city: value });
                                            }}
                                        >
                                            {city.map((item, index) => {
                                                return (
                                                    <Picker.Item key={index} value={item.id} label={item.name_city} />
                                                )
                                            })}
                                        </Picker>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Picker
                                            mode="dropdown"
                                            iosIcon={<Icon name="arrow-down" />}
                                            placeholder="Choose"
                                            placeholderStyle={{ color: "#bfc6ea" }}
                                            placeholderIconColor="#007aff"
                                            style={{ width: undefined }}
                                            selectedValue={(this.state && this.state.id_sub_city)}
                                            onValueChange={(value) => {
                                                this.setState({ id_sub_city: value });
                                            }}
                                        >
                                            {subcity.map((item, index) => {
                                                return (
                                                    <Picker.Item key={index} value={item.id} label={item.name_sub_city} />
                                                )
                                            })}
                                        </Picker>
                                    </View>
                                </View>
                                <View>
                                    <Item >
                                        <Input placeholder="Alamat Lengkap" onChangeText={(text) => this.setState({ address: text })} />
                                    </Item>
                                </View>
                                <View>

                                </View>
                                <View style={{ flexDirection: 'row', top: 10 }}>
                                    <View style={{ flex: 1 }}>
                                        <Icon name="camera" style={{ fontSize: 30, left: 10, color: '#35B829', top: 10 }} onPress={this.handleChoosePhoto}></Icon>
                                        <Icon name="file" style={{ fontSize: 30, left: 10, color: '#35B829', top: 30 }} onPress={this.handleUploadPhoto}></Icon>

                                    </View>
                                    <View style={{ flex: 2, flexDirection: 'column' }}>
                                        {/* <Text>hello</Text> */}
                                        {image && (
                                            <Image
                                                source={{ uri: image.uri }}
                                                style={{ width: 100, height: 100 }}
                                            />
                                        )}
                                        <Text style={{ flexWrap: 'nowrap' }}>{this.state.namePhoto}</Text>
                                    </View>
                                </View>
                                <View style={{ top: 50, marginHorizontal: 10, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                        <Button style={{ width: 100, justifyContent: "center", alignItems: 'center', backgroundColor: '#D71149' }} onPress={() => this.props.navigation.navigate('Login')}>
                                            <Text style={{ color: 'white' }}>Cancel</Text>
                                        </Button>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                        <Button style={{ width: 100, justifyContent: "center", alignItems: 'center', backgroundColor: '#35B829' }} onPress={this.onSubmit}>
                                            <Text style={{ color: 'white' }}>Save</Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        province: state.regions.province,
        city: state.regions.city,
        subcity: state.regions.subcity
    }
}

export default connect(mapStateToProps)(BuatAkunScreen);