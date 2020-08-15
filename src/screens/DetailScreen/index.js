import React, { Component } from 'react'
import {View,ScrollView, Dimensions,TouchableHighlight,Image,Alert,TouchableOpacity } from 'react-native'
import {WebView} from 'react-native-webview' 
import {Text,Button} from 'galio-framework'
import DetailStyle from './Style';
import IonIcon from 'react-native-vector-icons/FontAwesome'
import {getBookbyId,borrow} from '../../redux/actions/book'
import {returnBook} from '../../redux/actions/history'
import {deleteBook} from '../../redux/actions/admin'
import { connect } from 'react-redux';
import {API_URL} from '@env';
import HTML from 'react-native-render-html'

class DetailsScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            bookData : {}
        }
    }
    getDataItems = ()=>{
        var data = {
            id : this.props.route.params.itemId,
            token : this.props.user.auth.token
        }
        this.props.getBookbyId(data).then((res)=>{
        }).catch((err)=>{
        })
    }
    handleBorrow = ()=>{
        var data = {
            id : this.props.route.params.itemId,
            token : this.props.user.auth.token
        }
        this.props.borrow(data).then((res)=>{
            Alert.alert(
                'Success!!',
                res.value.data.msg,
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            )
        }).catch((err)=>{
            console.log(err)
        })
    }
    handleAlret = ()=>{
        Alert.alert(
            'Info',
            'Are You Sure ?',
            [
                { text: 'OK', onPress: () => this.handleDelete() },
                { text : 'Cancel',onPress : ()=>console.log('Cancel')}
            ],
            { cancelable: false }
        )
    }
    handleDelete =()=>{
        var data = {
            id : this.props.route.params.itemId,
            token : this.props.user.auth.token
        }
        this.props.deleteBook(data).then((res)=>{
            Alert.alert(
                'Success!!',
                'Book has been deleted',
                [
                    { text: 'OK', onPress: () => this.props.navigation.goBack() }
                ],
                { cancelable: false }
            )
        }).catch((err)=>{
            console.log(err)
        })
        console.log('res')
    }
    componentDidMount(){
        this.getDataItems()
    }
    render() {
        return (
            <View>
            <ScrollView>
            <View>
                {
                    this.props.book.bookFilled ? (
                        <View style={DetailStyle.header}>
                        <View style={DetailStyle.bg}></View>
                        <View style={DetailStyle.mainContent}>
                            <View style={DetailStyle.BookContent}>
                                {/* <View style={DetailStyle.BookImage}>
                                </View> */}
                                <Image style={DetailStyle.BookImage} source={{uri : `${API_URL}uploads/${this.props.book.book.image}`}}/>
                                <View style={DetailStyle.BookDetails}>
                                        <Text style={DetailStyle.title}> {this.props.book.book.title} </Text>
                                        <Text style={DetailStyle.author}>By {this.props.book.book.author} </Text>
                                        <Text style={DetailStyle.time}>6 Hours Ago</Text>
                                        <View style={DetailStyle.action}>
                                            {
                                                this.props.book.book.status == 'Available' ? 
                                                (
                                                    <Button color={'#4660CE'} shadowless round onPress={this.handleBorrow}>
                                                        <Text style={{color : 'white'}}>Borrow</Text>
                                                    </Button>
                                                ): 
                                                (
                                                    <Button disabled color={'#c31432'} shadowless round onPress={()=>{console.log(this.props.book.book.status)}}>
                                                    <Text style={{color : 'white'}}>Unavailable</Text>
                                                    </Button>
                                                )
                                            }
                                    </View>
                                </View>
                            </View>
                            <View style={DetailStyle.desc}>
                                <Text style={DetailStyle.synopsis}>Synopsis</Text>
                            {/* <Text style={DetailStyle.synopsisTxt}>{this.props.book.book.description}</Text> */}
                                <HTML html={this.props.book.book.description} imagesMaxWidth={Dimensions.get('window').width} />
                            </View>
                        </View>
                    </View>
                    ) : (
                        <Text>Loading</Text>
                    )
                }
            </View>
            </ScrollView>
                        <TouchableHighlight
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                            onPress={() => this.props.navigation.goBack()}
                            style={DetailStyle.backButton}
                            >
                            <View style={DetailStyle.touch} >
                                <IonIcon name="arrow-left" size={15} color={'white'}/><Text style={{color: 'white',marginLeft : 5}}>Back</Text>
                            </View>
                        </TouchableHighlight>
                        {
                            this.props.user.auth.role === 1?(
                                <>
                                <TouchableOpacity style={DetailStyle.actionBtn}
                                onPress={this.handleAlret}
                                >
                                    <IonIcon name="trash" size={25} color={'white'}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={DetailStyle.editBtn}
                                onPress={()=>{
                                    this.props.navigation.navigate('edite',{
                                        item : this.props.book.book
                                    })
                                }}>
                                    <IonIcon name="pencil" size={25} color={'white'}/>
                                </TouchableOpacity>
                                </>
                            ): (
                                <></>
                            )
                        }
            </View>
        )
    }
}
const mapStateToProps = state =>({
    book  : state.book,
    user : state.auth
})
const mapDispatchToProps = {getBookbyId,borrow,returnBook,deleteBook}

export default connect(mapStateToProps,mapDispatchToProps)(DetailsScreen)