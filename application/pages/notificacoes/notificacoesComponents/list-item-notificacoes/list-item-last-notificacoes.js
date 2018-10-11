import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../../Notificacoes-styles';

const ListItemLastNotificacoes = props => {

    const { notificacao } = props;

    return (
        <View>
            <View style={styles.labelAnteriores}>
                <Text style={styles.textAnteriores}>
                    Anteriores
                </Text>
            </View>

            {notificacao.passadas.map(passadas => (

                <View key={passadas.id} style={[
                    styles.line,
                    passadas.status == 0 ? styles.corFundoNotificacao: null
                ]}>

                    { passadas.status == 1 &&
                        <View style={styles.statusNova} />
                    }

                    { passadas.status == 0 &&
                        <View style={styles.statusLida} />
                    }

                    <TouchableOpacity activeOpacity={0.8} style={styles.containerImagem}>
                        <Image style={styles.imgPerfil} source={{ uri: passadas.imgProfile }} />
                    </TouchableOpacity>

                    <Text style={styles.lineText}>

                        <Text style={{fontWeight: 'bold', paddingRight: 5}}>
                            {passadas.nameProfile}
                        </Text>

                        <Text> {
                            passadas.descricao
                        }</Text>
                    </Text>

                    { passadas.tipo == 1 &&
                    <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                        <Text style={styles.labelBtnConexoes}>
                            CONECTAR
                        </Text>
                    </TouchableOpacity>
                    }

                    { passadas.tipo == 2 &&
                    <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                        <Text style={styles.labelBtnConexoes}>
                            VER PERFIL
                        </Text>
                    </TouchableOpacity>
                    }

                    { passadas.tipo == 3 &&
                    <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                        <Text style={styles.labelBtnConexoes}>
                            VER PRODUTO
                        </Text>
                    </TouchableOpacity>
                    }

                    { passadas.tipo == 4 &&
                    <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                        <Text style={styles.labelBtnConexoes}>
                            VER PEDIDO
                        </Text>
                    </TouchableOpacity>
                    }

                </View>
            ))}
        </View>
    );
};

export default ListItemLastNotificacoes;