import React, { Component } from 'react'
import { Text, View,ScrollView,TouchableOpacity,Modal,Alert } from 'react-native'
import Style from './Style'
import SearchBar from '../../components/SearchBar'
import Awsome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import {logout} from '../../redux/actions/auth'

class adminScreen extends Component {
    constructor(props){
        super(props)
        this.state ={
            modalVisible : false
        }
    }
    handleLogout = ()=>{
        this.props.logout()
    }
    render() {
        return (
            <View style={Style.container}>
                <ScrollView style={Style.content}>
                    <View style={Style.mainContent}>
                        <SearchBar/>
                            <View style={Style.CardContent}>
                                <View style={Style.cardBody}>
                                    <View>
                                    <Text style={Style.title}>Book Total : </Text>
                                    <Text style={Style.count}>4567</Text>
                                    </View>
                                    <View style={Style.data}>
                                        <Awsome name="book" size={90}/>
                                    </View>
                                </View>
                            </View>
                    </View>
                </ScrollView>
                    <TouchableOpacity style={Style.buttonCreate}
                    onPress={()=>{this.setState({modalVisible : true})}}
                    >
                        <Awsome name='plus' size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.buttonLogout}
                    onPress={this.handleLogout}
                    >
                        <Awsome name='sign-out' size={24} />
                    </TouchableOpacity>
                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setState({modalVisible : false})
                        }}
                        >
                            <View style={Style.modalShadow}>
                            </View>
                            <View style={Style.modalContent}>
                                <View style={Style.modalHeader}>
                                <Text>Create New</Text>
                                </View>
                                <View style={Style.panelMain}>
                                    <View style={Style.panel}>
                                        <Awsome name='renren' size={24}/>
                                        <Text>Genre</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={()=>{this.props.navigation.navigate('create');this.setState({modalVisible : false})}}>
                                    <View style={Style.panel}>
                                        <Awsome name='book' size={24} />
                                        <Text>Book</Text>
                                    </View>
                                    </TouchableOpacity>
                                    <View style={Style.panel}>
                                        <Awsome name='user-md' size={24} />
                                        <Text>Author</Text>
                                    </View>

                                </View>
                            </View>
                    </Modal>    
            </View>
        )
    }
}
const mapStateToProps = state =>({
    user : state.auth,
    bookData : state.book
})

const mapDispatchToProps = {logout}

export default connect(mapStateToProps,mapDispatchToProps)(adminScreen)