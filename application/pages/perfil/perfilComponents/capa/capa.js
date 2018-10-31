import React from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from './capa-styles';

const Capa = props => {

    const { perfil } =  props;

    return (
        <View style={styles.containerCapa}>


            {perfil.map((p, index) => (
            <View key={index} style={styles.containerFotoCapa}>
                <ImageBackground source={{uri: p.imgCapa[0].big}} style={styles.imgCapa} />
                <View style={styles.overlayFotoCapa} />
            </View>
             ))}

            <View style={styles.containerInfo}>

                {perfil.map((p, index) => (

                    <View key={index} style={styles.infoPerfil}>

                        <View style={styles.containerImgMarca}>
                            <Image style={styles.imgMarca} resizeMode={'contain'} source={{uri: p.imgPerfil[0].medium}} />
                        </View>

                        <View style={styles.containerLabel}>
                            <Text style={styles.labelBoasVindas}>
                                BEM VINDO À LOJA
                            </Text>
                        </View>

                        <View style={styles.containerNomeMarca}>
                            <Text style={styles.nomeMarca}>
                                {p.perfil_nome.toUpperCase()}
                            </Text>
                        </View>
                    </View>
                ))}

                <View style={styles.menuLateralIcons}>

                    <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                        <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/imagem.png') } />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                        <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/chat-fill.png') } />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                        <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/share.png') } />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                        <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/localizacao.png') } />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                        <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/telefone.png') } />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

export default Capa;