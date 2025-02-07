import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function Call() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
    }

    return (
        <View style={styles.button}>
            {['FOLLOWING', 'RECOMMNDED'].map((category) => (
                <TouchableOpacity
                    key={category}
                    onPress={() => handleCategoryPress(category)}
                >
                    <Text
                        style={[
                            styles.buttontext,
                            selectedCategory === category
                                ? styles.selectedText
                                : styles.defaultText,
                        ]}
                    >
                        {category}
                    </Text>
                </TouchableOpacity>
            ))}
            <MaterialCommunityIcons
                style={styles.icon}
                name="dots-horizontal"
                size={40}
                color="white"
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    button: {
        flexDirection: 'row',
        marginTop: 21,
        marginLeft: 30,
        marginBottom: 40,
        justifyContent:'center',
        alignItems:'center'
    },
    buttontext: {
        marginRight: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    selectedText: {
        color: 'rgb(254,253,253)', 
    },
    defaultText: {
        color: 'rgb(252,252,252)', 
        opacity: 0.3,
    },
    icon: {
        marginLeft: 90,  
        marginTop: 2,  
        marginBottom:10,
    },
});

export default Call;
