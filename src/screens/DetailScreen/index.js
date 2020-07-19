import React, { Component } from 'react'
import {View,ScrollView, Dimensions,TouchableHighlight,Image } from 'react-native'
import {WebView} from 'react-native-webview' 
import {Text,Button} from 'galio-framework'
import DetailStyle from './Style';
import IonIcon from 'react-native-vector-icons/FontAwesome'
import {getBookbyId} from '../../redux/actions/book'
import { connect } from 'react-redux';
import {API_URL} from '@env'

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
    componentDidMount(){
        this.getDataItems()
    }
    render() {
        return (
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
                                    <Button color={'#4660CE'} shadowless round onPress={()=>{console.log('pressed')}}>
                                        <Text style={{color : 'white'}}>Borrow</Text>
                                    </Button>
                                    </View>
                                </View>
                            </View>
                            <View style={DetailStyle.desc}>
                                <Text style={DetailStyle.synopsis}>Synopsis</Text>
                            {/* <Text style={DetailStyle.synopsisTxt}>{this.props.book.book.description}</Text> */}
                                        <WebView
                                            originWhitelist={['*']}
                                            source={{ html: '<h3>Helo</h3>' }}
                                            style={{ marginTop: 20,color : 'white',backgroundColor : 'black' }}
                                        />
                            </View>
                        </View>
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
                    </View>
                    ) : (
                        <Text>Loading</Text>
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
const mapDispatchToProps = {getBookbyId}

export default connect(mapStateToProps,mapDispatchToProps)(DetailsScreen)