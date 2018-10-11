import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../../Notificacoes-styles';

const ListItemNewNotificacoes = props => {

    const { notificacao } = props;

    return (

        <View>
            {notificacao.novas.map(novas => (

                <View key={novas.id} style={[
                    styles.line,
                    novas.status == 0 ? styles.corFundoNotificacao: null
                    ]}>

                    { novas.status == 1 &&
                        <View style={styles.statusNova} />
                    }
                    { novas.status == 0 &&
                        <View style={styles.statusLida} />
                    }

                    <TouchableOpacity activeOpacity={0.8} style={styles.containerImagem}>
                        <Image style={styles.imgPerfil} source={{ uri: novas.imgProfile }} />
                    </TouchableOpacity>

                    <Text style={styles.lineText}>

                        <Text style={{fontWeight: 'bold', paddingRight: 5}}>
                            {novas.nameProfile}
                        </Text>

                        <Text> {
                            novas.descricao
                        }</Text>
                    </Text>

                    { novas.tipo == 1 &&
                    <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                        <Text style={styles.labelBtnConexoes}>
                            CONECTAR
                        </Text>
                    </TouchableOpacity>
                    }

                    { novas.tipo == 2 &&
                    <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                        <Text style={styles.labelBtnConexoes}>
                            VER PERFIL
                        </Text>
                    </TouchableOpacity>
                    }

                    { novas.tipo == 3 &&
                    <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                        <Text style={styles.labelBtnConexoes}>
                            VER PRODUTO
                        </Text>
                    </TouchableOpacity>
                    }

                    { novas.tipo == 4 &&
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

export default ListItemNewNotificacoes;