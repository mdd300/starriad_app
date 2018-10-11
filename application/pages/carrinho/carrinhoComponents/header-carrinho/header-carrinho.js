import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './header-carrinho-styles';

const headerCarrinho = props => {

    const { onPressItem } = props;

    return(
        <View style={{height: 80}}>
            <View style={styles.containerHeader}>

                <View style={styles.contentHeader}>

                    <TouchableOpacity style={styles.btnBack} onPress={onPressItem}>
                        <Image resizeMode={'contain'} source={require('../../../../assets/imgs/png/icons/seta-left-black.png')}
                            style={styles.iconBack} />
                    </TouchableOpacity>

                    <View style={styles.titleHeader}>
                        <Text style={styles.textTitleHeader}>{ props.title }</Text>
                    </View>

                    <View style={styles.containerImgMarca}>
                        <Image resizeMode={'contain'} source={{uri: props.imagemMarca}}
                               style={styles.imgMarca} />
                    </View>

                </View>

                <View style={styles.messageHeader}>
                    <Text style={styles.textMessageHeader}>{ props.subtitle }</Text>
                </View>

            </View>
        </View>
    );
};

export default headerCarrinho;