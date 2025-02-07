import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CategoriesHome from '../../../assets/CategoriesHome';
import CategoriesBanner from '../../components/CategoriesBanner/CategoriesBanner';

function CategoriesScreen() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


    const handleCategoryPress = (category: string) => {
        setSelectedCategory(category);
    };
    

    return (
        <FlatList
            ListHeaderComponent={
                <>
                    <View style={styles.box1}>
                        <Text style={styles.text1}>CATEGORIES</Text>
                        <Text style={styles.text2}>See more</Text>
                    </View>
                    <View style={styles.button}>
                        {['SPORT', 'DESIGN', 'TECHNOLOGY', 'TRAVEL'].map((category) => (
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
                    </View>
                </>
            }
            data={CategoriesHome}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CategoriesBanner item={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment="center"
            decelerationRate="fast"
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    box1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text1: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    text2: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 20,
        top: 45,
        opacity: 0.5,
    },
    button: {
        flexDirection: 'row',
        marginTop: 45,
        marginLeft: 20,
    },
    buttontext: {
        marginRight: 15,
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectedText: {
        color: 'black',
    },
    defaultText: {
        color: 'black',
        opacity: 0.3,
    },
});

export default CategoriesScreen;
