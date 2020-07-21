import React, { Component } from 'react'
import { Text, View,Dimensions,Image,TouchableOpacity } from 'react-native'
import HTML from 'react-native-render-html'
import { connect } from 'react-redux'
import Style from './Style'
import {Button} from 'galio-framework'
import profile from '../../images/felin.jpg';
import {logout} from '../../redux/actions/auth'

class UserScreen extends Component {
    constructor(props){
        super(props)
    }
    handleLogout = ()=>{
        this.props.logout()
    }
    render() {
        const BorrowBook = this.props.historyData.history.filter((data)=>{
            return data.return_date === null
        }).length;
        const returnBook = this.props.historyData.history.filter((data)=>{
            return data.return_date !== null
        }).length
        return (
            <View style={Style.content}>
                <View style={Style.mainContent}>
                    <View style={Style.userProfile}>
                        <View style={Style.boxShadow}>
                        <Image source={profile} style={Style.profileImage}/>
                        </View>
                        <Text style={Style.name}> {this.props.user.auth.name} </Text>
                        <Text style={Style.joinAt}>Join at 20/92</Text>
                    </View>
                    <View style={Style.statistic}>
                        <View style={Style.dataBar}>
                            <Text style={Style.dataCount}> {BorrowBook} </Text>
                            <Text style={Style.joinAt}>Borrow</Text>
                        </View>
                        <View style={Style.dataBar}>
                            <Text style={Style.dataCount}> {returnBook} </Text>
                            <Text style={Style.joinAt}>Return</Text>
                        </View>
                    </View>
                </View>
                <View style={Style.action}>
                    <TouchableOpacity>
                        <Button color={'black'} shadowless round onPress={this.handleLogout}>Log out</Button>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state=>({
    user  : state.auth,
    historyData : state.history
})
const mapDispatchToProps = {logout}
export default connect(mapStateToProps,mapDispatchToProps)(UserScreen)
