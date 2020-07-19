import React, { Component } from 'react'
import { Text, View,FlatList,TouchableOpacity } from 'react-native';
import {Card} from 'galio-framework'
import CardStyle from './Style';
import * as RootNav from '../../routes/RootNavigation'
import { connect } from 'react-redux';

class BooksWrapper extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                    imageUrl : "https://images-na.ssl-images-amazon.com/images/I/51gHME-uBsL._AC_.jpg",
                    title    : "something"
                  },
                  {
                    imageUrl : "https://upload.wikimedia.org/wikipedia/en/c/c6/On_Stranger_Tides_Poster.jpg",
                    title    : "something"
                  },
                  {
                    imageUrl : "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1590471773/ymv145q4thcorvgt0i5u.jpg",
                    title    : "something"
                  },
                  {
                    imageUrl : "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                    title    : "something"
                  },
            ]
        }
    }
    render() {
        return (
            // <View style={CardStyle.wrapper}>
            //     <FlatList 
            //     style={{marginBottom : 0}}
            //     horizontal
            //     data={this.state.data}
            //     renderItem={({ item: rowData }) => {
            //       return (
            //         <TouchableOpacity
            //           onPress={
            //             ()=>{RootNav.navigate('detail')}
            //           }
            //           >
            //           <Card
            //             image={rowData.imageUrl}
            //             style={{width : 100,marginLeft : 15}}
            //             borderless
            //             imageStyle={{height : 200}}
            //             shadow={false}
            //           >
            //           </Card>
            //         </TouchableOpacity>
            //       );
            //     }}
            //     keyExtractor={(item, index) => index.toString()}
            //     />
            // </View>

            <View style={CardStyle.wrapper}>
                <FlatList 
                style={{marginBottom : 0}}
                horizontal
                data={this.props.home.book}
                renderItem={({ item: rowData }) => {
                  return (
                    <TouchableOpacity
                      onPress={
                        ()=>{RootNav.navigate('detail',{itemId : rowData.id})}
                      }
                      >
                      <Card
                        image={`http://192.168.43.124:3000/uploads/${rowData.image}`}
                        style={{width : 100,marginLeft : 15}}
                        borderless
                        imageStyle={{height : 200}}
                        shadow={false}
                      >
                      </Card>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}
const mapStateToProps = state =>({
  user : state.auth,
  home : state.home
})

export default connect(mapStateToProps)(BooksWrapper)
