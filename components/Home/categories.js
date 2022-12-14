import { View, Text, Image, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const items = [
    {image : require('../../assets/images/shopping-bag.png') , text : 'Pick-up'},
    {image : require('../../assets/images/bread.png') , text : 'Bakery Items'},
    {image : require('../../assets/images/soft-drink.png') , text : 'Soft Drink'},
    {image : require('../../assets/images/fast-food.png') , text : 'Fast Foods'},
    {image : require('../../assets/images/deals.png') , text : 'Deals'},
    {image : require('../../assets/images/coffee.png') , text : 'Coffee & Tea'},
    {image : require('../../assets/images/desserts.png') , text : 'Desserts'},
];

export default function categories() {
  return (
    <View style = {{backgroundColor : 'white'}}>
        <FlatList horizontal showsHorizontalScrollIndicator = {false}
        data = {items}
        renderItem = {({item}) => (
            <TouchableOpacity>
                <View style = {{margin : 5 , alignItems : 'center'}}>   
                    <Image source = {item.image} style = {{
                        width : 50,
                        height : 40 ,
                        resizeMode : 'contain',
                    }}/>             
                    <Text style = {{fontWeight : 'bold'}}>{item.text}</Text>
                </View>
            </TouchableOpacity>
        )}
        />      
    </View>
  )
}