import React, { Component } from 'react'
import { Text, View,ScrollView,TouchableOpacity,TextInput,Picker } from 'react-native'
import { Input,Button } from 'galio-framework';
import ImagePicker from 'react-native-image-picker';
import Style from './Style';
import { connect } from 'react-redux';
import {addBooks} from '../../redux/actions/admin';
import Awsome from 'react-native-vector-icons/FontAwesome'


class CreateScreen extends Component {
    constructor(props){
        super(props)
        this.state ={
            title : '',
            description : '',
            id_genre : '',
            id_author : '',
            status : '',
            srcImg : {},
            uri : null,
            fileName : ''

        }
    }
    choosePicture = () => {
        var options = {
            title: 'Pilih Gambar',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              console.log(response);
              this.setState({
                srcImg: { uri: response.uri },
                uri: response.uri,
                fileName: response.fileName
              });
            }
        });
    }
    handleSumbit = ()=>{
        var formData = new FormData()
        var token = this.props.user.auth.token
        formData.append('title',this.state.title)
        formData.append('description',this.state.description)
        formData.append('id_genre',this.state.id_genre)
        formData.append('id_author',this.state.id_author)
        formData.append('status',this.state.status)
        formData.append('image',{
            uri: this.state.srcImg.uri,
            type: 'image/jpeg',
            name: this.state.fileName,
        })
        console.log(formData)
        this.props.addBooks(formData,token).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

    }
    render() {
        return (
            <ScrollView>
            <View style={Style.content}>
                <Text> Create Book </Text>
                <View style={Style.form}>
                    <View style={Style.formInput}>
                        <Input placeholder="title" rounded borderless={true} style={Style.input,Style.boxShadow} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.setState({title : text})}/>
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
                            selectedValue={2}
                            style={Style.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({id_genre : itemValue})}
                            >
                            <Picker.Item label="Adventure" value="10" />
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
                            onValueChange={(itemValue, itemIndex) => this.setState({id_author : itemValue})}
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
                            onValueChange={(itemValue, itemIndex) => this.setState({status : itemValue})}
                            >
                            <Picker.Item label="Available" value="Available" />
                            <Picker.Item label="Borrow" value="Unavailable" />
                        </Picker>
                        </View>
                    </View>
                    <View style={Style.formInput}>
                        <Text>Select Image</Text>
                        <TouchableOpacity
                        style={Style.imageForm}
                        onPress={this.choosePicture}
                        >
                            <Awsome name='picture-o' size={30}/>
                        </TouchableOpacity>
                    </View>
                    <View  style={Style.formInput,Style.submitWrapper} >
                        <TouchableOpacity
                        
                        >
                        <Button color={'black'} shadowless round onPress={this.handleSumbit}>Create</Button>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = state=>({
    user : state.auth
})
const mapDispatchToProps = {addBooks}
export default connect(mapStateToProps,mapDispatchToProps)(CreateScreen)