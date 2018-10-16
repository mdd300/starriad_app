import React from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from './capa-styles';

const Capa = props => {

    const { perfil } =  props;

    return (
        <View style={styles.containerCapa}>

            <View style={styles.containerFotoCapa}>
                <ImageBackground source={{uri: 'https://cdn.awsli.com.br/600x450/141/141063/produto/13989665/1eb662ac0c.jpg'}} style={styles.imgCapa} />
                <View style={styles.overlayFotoCapa} />
            </View>

            <View style={styles.containerInfo}>

                {perfil.map((p, index) => (

                    <View key={index} style={styles.infoPerfil}>

                        <View style={styles.containerImgMarca}>
                            <Image style={styles.imgMarca} resizeMode={'contain'} source={{uri: p.imgMarca}} />
                        </View>

                        <View style={styles.containerLabel}>
                            <Text style={styles.labelBoasVindas}>
                                BEM VINDO À LOJA
                            </Text>
                        </View>

                        <View style={styles.containerNomeMarca}>
                            <Text style={styles.nomeMarca}>
                                {p.nameMarca}
                            </Text>
                        </View>
                    </View>
                ))}

                <View style={styles.menuLateralIcons}>

                    <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                        <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/imagem-white.png') } />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                        <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/chat-white.png') } />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                        <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/share-white.png') } />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                        <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/localizacao-white.png') } />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                        <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/telefone-white.png') } />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

export default Capa;