import React, { Component } from 'react'
import { Text, View,ScrollView,TouchableOpacity,Modal,ActivityIndicator,Alert } from 'react-native'
import { connect } from 'react-redux';
import { Input,Button } from 'galio-framework'
import { getGenre,deleteGenre,editGenre,addGenre } from '../../redux/actions/genre'
import Style from './Style'
import Awsome from 'react-native-vector-icons/FontAwesome'
class GenreScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalVisible : false,
            txt : '',
            id : null,
            isLoading : false,
            modalAdd : false,
            add : ''
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
        }).catch((err)=>{
            console.log(err)
        })
    }
    handleDelete = (id)=>()=>{
       var data = {
           token : this.props.user.auth.token,
           id : id
       }
       this.props.deleteGenre(data).then((res)=>{
                Alert.alert(
                    'Success!!',
                    'Genre Has been delete',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') }
                    ],
                    { cancelable: false }
                )
       }).catch((err)=>{
           console.log(err)
       })
    }
    handleSumbit = ()=>{
        this.setState({
            isLoading : true
        })
        var data = {
            id_genre : this.state.id,
            genre : this.state.txt,
            token : this.props.user.auth.token
        }
        this.props.editGenre(data).then((res)=>{
            Alert.alert(
                'Success!!',
                'Genre Has been edit',
                [
                    { text: 'OK', onPress: () => this.handleGetData() }
                ],
                { cancelable: false }
            )
            this.setState({
                isLoading : false,
                modalVisible : false
            })
            this.handleGetData()
        }).catch((err)=>{
            this.setState({
                isLoading : false,
                modalVisible : false
            })
        })
    }
    handleAdd = ()=>{
        this.setState({
            isLoading : true
        })
        var data = {
            genre : this.state.add,
            token : this.props.user.auth.token
        }
        this.props.addGenre(data).then((res)=>{
            Alert.alert(
                'Success!!',
                'Genre Has been Insert',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            )
            this.setState({
                isLoading : false,
                modalAdd : false
            })
            this.handleGetData()
        }).catch((err)=>{
            this.setState({
                isLoading : false,
                modalAdd : false
            })
        })
    }
    render() {
        return (
            <View style={Style.content}>
                <View style={Style.head}>
                <Text> Genre </Text>
                </View>
                <ScrollView style={Style.mainContent}>
                    {
                        this.props.genreData.genre.map((row,index)=>{
                            return  <View style={Style.card} key={index}>
                                        <Text onPress={()=>{this.setState({
                                            modalVisible : true,
                                            id : row.id_genre,
                                            txt : row.genre
                                        
                                        })}}>{row.genre}</Text>
                                        <TouchableOpacity style={Style.action}
                                        onPress={this.handleDelete(row.id_genre)}>
                                            <Awsome name="trash" size={24} color={'#ED213A'}/>
                                        </TouchableOpacity>
                                    </View>
                        })
                    }
                </ScrollView>
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
                                <Text>Edit</Text>
                                </View>
                                <View style={Style.panelMain}>
                                <View style={Style.formInput}>
                                    <Input placeholder="title" value={this.state.txt} rounded borderless={false} style={Style.input,Style.boxShadow} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.setState({txt : text})}/>
                                </View>
                                <View style={Style.formInput}>
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
                    </Modal> 
                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={this.state.modalAdd}
                        onRequestClose={() => {
                            this.setState({modalAdd : false})
                        }}
                        >
                            <View style={Style.modalShadow}>
                            </View>
                            <View style={Style.modalContent}>
                                <View style={Style.modalHeader}>
                                <Text>Add</Text>
                                </View>
                                <View style={Style.panelMain}>
                                <View style={Style.formInput}>
                                    <Input placeholder="Genre" value={this.state.add} rounded borderless={false} style={Style.input,Style.boxShadow} placeholderTextColor={'#D4D7DE'} color={'black'} onChangeText={text=>this.setState({add : text})}/>
                                </View>
                                <View style={Style.formInput}>
                                    <TouchableOpacity
                            
                                    >
                                        <Button color={'black'} shadowless round onPress={this.handleAdd}>
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
                    </Modal>
                    <TouchableOpacity 
                    style={Style.bot}
                    onPress={()=>{this.setState({modalAdd : true})}}>
                        <Awsome name="plus" size={24}/>
                    </TouchableOpacity> 
            </View>
        )
    }
}
const mapStateToProps = state =>({
    user : state.auth,
    genreData : state.genre
})
const mapDispatchToProps = {getGenre,deleteGenre,editGenre,addGenre}
export default connect(mapStateToProps,mapDispatchToProps)(GenreScreen)
