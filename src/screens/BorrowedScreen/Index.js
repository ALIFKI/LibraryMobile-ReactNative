import React, { Component } from 'react'
import { Text,View,ScrollView,Image,TouchableOpacity, Alert,RefreshControl } from 'react-native'
import Style from './Style'
import Awsome from 'react-native-vector-icons/FontAwesome';
import BookCard from '../../components/BookCard'
import { getTransaction,returnBook } from '../../redux/actions/history'
import { connect } from 'react-redux';

class BorrowedScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
            ],
            refreshing : false
        }
    }
    handleGetTransaction = ()=>{
        var data = {
            id : 0,
            token : this.props.user.auth.token
        }
        this.props.getTransaction(data).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    handleReturn = (id)=>{
        var data = {
            id : id,
            token : this.props.user.auth.token
        }
        this.props.returnBook(data).then((res)=>{
            Alert.alert(
                'Success!!',
                // res.value.data.msg,
                'Book has been return',
                [
                    { text: 'OK', onPress: () => this.handleGetTransaction() }
                ],
                { cancelable: false }
            )
        }).catch((err)=>{
            console.log(err)
        })
    }
    onRefresh = ()=>{
        this.setState({
            refreshing : true
        })
        var data = {
            id : 0,
            token : this.props.user.auth.token
        }
        this.props.getTransaction(data).then((res)=>{
            this.setState({
                refreshing : false
            })
        }).catch((err)=>{
            this.setState({
                refreshing : false
            })
        })
    }
    componentDidMount(){
        this.handleGetTransaction()
    }
    render() {
        return (
            <ScrollView style={Style.content}
            refreshControl={
                <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
              }>
                <View style={Style.mainContent}>
                    <View style={Style.header}>
                        <Text style={Style.titleTxt}>
                            Your Books
                        </Text>
                        <Awsome name="bell" color={'white'} size={16}/>
                    </View>
                    <View style={Style.bookWraper}>
                        {
                            this.props.historyData.history.filter((data)=>{
                                return data.return_date === null
                            }).map((row,index)=>{
                                return row.return_date === null ? (
                                    <BookCard key={index} data={row} handleReturn={this.handleReturn}/>
                                ) : (<Text key={index}></Text>)
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = state =>({
    user : state.auth,
    historyData : state.history
})
const mapDispatchToProps = {getTransaction,returnBook}

export default connect(mapStateToProps,mapDispatchToProps)(BorrowedScreen)
