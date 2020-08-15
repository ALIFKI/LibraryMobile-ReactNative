import React, { Component } from 'react'
import { Text,View,ScrollView,Modal,Alert,TouchableOpacity,Picker,Image,ListView } from 'react-native'
import SearchBar from '../../components/SearchBar'
import Style from './Style'
import Awsome from 'react-native-vector-icons/FontAwesome'
import {search} from '../../redux/actions/book'
import { connect } from 'react-redux'
import {API_URL} from '@env'

class SearchScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            visibleModal : false,
            ModalSort : false,
            result : [],
            genre : 'title',
            sort : 0,
            search : '',
            page : 1
        }

        this.txt = React.createRef()
    }
    handeleResetSearch= ()=>{
        this.setState({
            page : 1,
            result : []
        },this.handleSearch)
    }
    
    handleSearch = ()=>{
        var data = {
            token : this.props.user.auth.token,
            search : this.txt.current.state.txt,
            by : this.state.genre,
            sort : this.state.sort,
            page : this.state.page
        }
        this.props.search(data).then((res)=>{
            console.log(res)
            if(res.value.data.data === undefined){
                this.setState({result : []})
            }
            else{
                if (this.state.result.length <= 0) {
                    this.setState({
                        result : res.value.data.data,
                        page : parseInt(res.value.data.pageInfo.current_page)
                    })
                }
                else{
                    var newArr = this.state.result
                    for (let index = 0; index < res.value.data.data.length; index++) {
                        newArr.push(res.value.data.data[index])
                    }
                    this.setState({
                        result : newArr,
                        page : parseInt(res.value.data.pageInfo.current_page)
                    })
                }
            }
        }).catch((err)=>{
            console.log(err.response)
        })
    }
    handlePagination= ()=>{
        this.setState({page : this.state.page+1},this.handleSearch)
    }
    render() {
        const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
            const paddingToBottom = 0;
            return layoutMeasurement.height + contentOffset.y >=
                contentSize.height - paddingToBottom;
        };
        return (
            <View style={Style.view}>
                <TouchableOpacity 
                    style={Style.searchBtn}
                    onPress={this.handeleResetSearch}
                >
                    <View>
                        <Awsome name='search' size={24}/>
                    </View>
                </TouchableOpacity>
            <ScrollView style={Style.content}
                onScroll={({nativeEvent}) => {
                    if (isCloseToBottom(nativeEvent)) {
                    this.handlePagination()
                    }
                }}
            >
                <SearchBar ref={this.txt}/>
                <View style={Style.mainContent}>
                    {
                        this.state.result.length !== 0? (
                            this.state.result.map((row,index)=>{
                                return  <TouchableOpacity key={index}
                                            onPress={()=>{this.props.navigation.navigate('detail',{itemId : row.id})}}>
                                            {/* <View style={Style.cardBook}>
                                            </View> */}
                                            <Image source={{uri : `${API_URL}uploads/${row.image}`}} style={Style.cardBook}/>
                                        </TouchableOpacity>
                            })
                        ): (
                            <View style={Style.noData}>
                                <Text>No Data</Text>
                            </View>
                        )
                    }
                </View>
            </ScrollView>
            {
                this.state.result.length == 0 ? (<></>) : (
                    <View style={Style.buttonFot}>
                    <TouchableOpacity onPress={()=>{this.setState({ModalSort: true})}}>
                        <Awsome name='sort-amount-asc' size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({visibleModal: true})}}>
                        <Awsome name='filter' size={24}/>
                    </TouchableOpacity>
                </View>
                )
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.visibleModal}
                onRequestClose={() => {
                    this.setState({
                        visibleModal : false
                    })
                }}
            >
                <View style={Style.modal}>
                    <Text>
                        Search by
                    </Text>
                    <Picker
                        selectedValue={this.state.genre}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({genre: itemValue})}
                    >
                        <Picker.Item label="Title" value="title" />
                        <Picker.Item label="Genre" value="genre" />
                        <Picker.Item label="Author" value="author" />
                    </Picker>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.ModalSort}
                onRequestClose={() => {
                    this.setState({
                        ModalSort : false
                    })
                }}
            >
                <View style={Style.modal}>
                    <Text>
                        Sort
                    </Text>
                    <Picker
                        selectedValue={this.state.sort}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({sort: itemValue,ModalSort : false},this.handeleResetSearch)}
                    >
                        <Picker.Item label="A-z" value="0" />
                        <Picker.Item label="Z-a" value="1" />
                    </Picker>
                </View>
            </Modal>
            </View>
        )
    }
}

const mapStateToProps = state=>({
    user : state.auth,
    searchData : state.book
})

const mapDispatchToProps = {search}

export default connect(mapStateToProps,mapDispatchToProps)(SearchScreen)