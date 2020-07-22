import React, { Component } from 'react'
import { Text, View } from 'react-native'
import GenreStyle from './Style';
import BooksWrapper from '../BooksWrapper';
import GenreFlat from '../GenreFlat'
import { connect } from 'react-redux';
import {getGenre} from '../../redux/actions/genre'

class GenreWrapper extends Component {
    constructor(props){
        super(props)
    }
    handleGet =()=>{
        var data = {
            token : this.props.user.auth.token
        }
        this.props.getGenre(data).then((res)=>{
            // console.log(res)
        }).catch((err)=>{
            console.log(err.response)
        })
    }
    componentDidMount(){
        this.handleGet()
    }
    render() {
        return (
            <View style={GenreStyle.bookWrapper}>
            <View style={GenreStyle.titleTxt}>
                <Text style={GenreStyle.TxtMain}>See Genre</Text>
                <Text style={GenreStyle.TxtMore}>See All</Text>
            </View>
            {/* <BooksWrapper/> */}
            <GenreFlat data={this.props.genre.genre}/>
            </View>
        )
    }
}
const mapStateToProps = state=>({
  genre : state.genre,
  user : state.auth   
})
const mapDispatchToProps = {getGenre}
export default connect(mapStateToProps,mapDispatchToProps)(GenreWrapper)
