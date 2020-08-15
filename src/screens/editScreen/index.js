import React, { Component } from 'react'
import { Text, View,ScrollView,TouchableOpacity,TextInput,Picker,Alert,ActivityIndicator } from 'react-native'
import { Input,Button } from 'galio-framework';
import ImagePicker from 'react-native-image-picker';
import Style from './Style';
import { connect } from 'react-redux';
import {addBooks,editBook} from '../../redux/actions/admin';
import Awsome from 'react-native-vector-icons/FontAwesome'
import {getGenre} from '../../redux/actions/genre'
import {getAuthor} from '../../redux/actions/author'


class EditScreen extends Component {
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
            fileName : '',
            isLoading : false

        }
    }
    componentDidMount(){
        this.handleGetData()
    }
    handleGetData = ()=>{
        var data = {
            token : this.props.user.auth.token
        }
        this.props.getGenre(data).then((res)=>{
            console.log(res)
        }).catch((err)=>{console.log(err)})
        this.props.getAuthor(data).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        this.setState({
            title : this.props.route.params.item.title,
            description : this.props.route.params.item.description,
            id_genre : this.props.route.params.item.id_genre,
            id_author : this.props.route.params.item.id_author,
            status : this.props.route.params.item.status,
        })
    }
    choosePicture = () => {
        var options = {
            title: 'Choose Image',
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
        this.setState({
            isLoading : true
        })
        var formData = new FormData()
        // var token = this.props.user.auth.token
        formData.append('title',this.state.title)
        formData.append('description',this.state.description)
        formData.append('id_genre',this.state.id_genre)
        formData.append('id_author',this.state.id_author)
        formData.append('status',this.state.status)
        if(this.state.uri){
            formData.append('image',{
                uri: this.state.srcImg.uri,
                type: 'image/jpeg',
                name: this.state.fileName,
            })
        }
        var data = {
            id : this.props.route.params.item.id,
            token : this.props.user.auth.token,
            formData : formData
        }
        this.props.editBook(data).then((res)=>{
            Alert.alert(
                'Success!!',
                'Book has been edite',
                [
                    { text: 'OK', onPress: () => this.props.navigation.navigate('adminMain') }
                ],
                { cancelable: false }
            )
            this.setState({
                isLoading : false
            })
        }).catch((err)=>{
            console.log(err)
            Alert.alert(
                'Oopss!!',
                "Insert error",
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            )
            this.setState({
                isLoading : false
            })
        })

    }
    render() {
        return (
            <ScrollView>
            <View style={Style.content}>
                <Text onPress={()=>{console.log(this.props.authorData)}}> Create Book </Text>
                <View style={Style.form}>
                    <View style={Style.formInput}>
                        <Input placeholder="title" rounded borderless={true} style={Style.input,Style.boxShadow} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.setState({title : text})} value={this.state.title}/>
                    </View>
                    <View style={Style.formInput}>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        style={Style.inputTxt}
                        onChangeText={(text) => this.setState({description : text})}
                        value={this.state.description}/>
                    </View>
                    <View style={Style.formInput}>
                        <Text>Genre</Text>
                        <View style={Style.pickerContent}> 
                        <Picker
                            selectedValue={this.state.id_genre}
                            style={Style.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({id_genre : itemValue})}
                            >
                                <Picker.Item label={'Choose Genre'} value={''} />
                            {
                                this.props.genreData.genre.map((row,index)=>{
                                    return <Picker.Item label={row.genre} value={row.id_genre} key={index} />
                                })
                            }
                        </Picker>
                        </View>
                    </View>
                    <View style={Style.formInput}>
                        <Text>Author</Text>
                        <View style={Style.pickerContent}> 
                        <Picker
                            selectedValue={this.state.id_author}
                            style={Style.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({id_author : itemValue})}
                            >
                                <Picker.Item label={'Choose Author'} value={''} />
                                {
                                    this.props.authorData.author.map((row,index)=>{
                                        return <Picker.Item label={row.author} value={row.id_author} key={index} />  
                                    })
                                }
                        </Picker>
                        </View>
                    </View>
                    <View style={Style.formInput}>
                        <Text>Status</Text>
                        <View style={Style.pickerContent}> 
                        <Picker
                            selectedValue={this.state.status}
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
                            {
                                this.state.uri === null? (
                                    <Awsome name='picture-o' size={30}/>
                                ) : (
                                    <Awsome name="check" size={30} color={'#77B162'}/>
                                )
                            }
                        </TouchableOpacity>
                    </View>
                    <View  style={Style.formInput,Style.submitWrapper} >
                        <TouchableOpacity
                        
                        >
                        <Button color={'black'} shadowless round onPress={this.handleSumbit}>
                            {
                                this.state.isLoading ? (
                                    <ActivityIndicator color={'white'}/>
                                ) : (<Text style={{color: 'white'}}>Edit</Text>)
                            }
                        </Button>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = state=>({
    user : state.auth,
    genreData : state.genre,
    authorData : state.author
})
const mapDispatchToProps = {addBooks,getGenre,getAuthor,editBook}
export default connect(mapStateToProps,mapDispatchToProps)(EditScreen)