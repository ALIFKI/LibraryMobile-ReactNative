import React, { Component } from 'react'
import { Text, View,ScrollView,TouchableOpacity,TextInput,Picker } from 'react-native'
import { Input,Button } from 'galio-framework'
import Style from './Style';


export default class CreateScreen extends Component {
    constructor(props){
        super(props)
        this.state ={
            title : '',
            description : '',
            id_genre : '',
            id_author : '',
        }
    }
    render() {
        return (
            <ScrollView>
            <View style={Style.content}>
                <Text> Create Book </Text>
                <View style={Style.form}>
                    <View style={Style.formInput}>
                        <Input placeholder="title" rounded borderless={true} style={Style.input,Style.boxShadow} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.validate(text)}/>
                    </View>
                    <View style={Style.formInput}>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        style={Style.inputTxt}
                        onChangeText={(text) => this.setState({description : text})}
                        value={this.state.text}/>
                    </View>
                    <View style={Style.formInput}>
                        <Text>Genre</Text>
                        <View style={Style.pickerContent}> 
                        <Picker
                            // selectedValue={selectedValue}
                            style={Style.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({id_genre : itemValue})}
                            >
                            <Picker.Item label="Adventure" value="2" />
                            <Picker.Item label="Novel" value="2" />
                        </Picker>
                        </View>
                    </View>
                    <View style={Style.formInput}>
                        <Text>Author</Text>
                        <View style={Style.pickerContent}> 
                        <Picker
                            // selectedValue={selectedValue}
                            style={Style.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({id_genre : itemValue})}
                            >
                            <Picker.Item label="Alifki" value="12" />
                            <Picker.Item label="Adventure" value="12" />
                        </Picker>
                        </View>
                    </View>
                    <View style={Style.formInput}>
                        <Text>Status</Text>
                        <View style={Style.pickerContent}> 
                        <Picker
                            // selectedValue={selectedValue}
                            style={Style.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({id_genre : itemValue})}
                            >
                            <Picker.Item label="Available" value="Available" />
                            <Picker.Item label="Borrow" value="Borrow" />
                        </Picker>
                        </View>
                    </View>
                    <View  style={Style.formInput,Style.submitWrapper} >
                        <TouchableOpacity
                        >
                        <Button color={'black'} shadowless round onPress={this.handleLogin}>Create</Button>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}
