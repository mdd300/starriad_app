import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../../Notificacoes-styles';

const ListItemLastNotificacoes = props => {

    const { notificacao } = props;

    if(notificacao.date == 'Atividades Passadas'){
        return (
            <View>
                <View style={styles.labelAnteriores}>
                    <Text style={styles.textAnteriores}>
                        {notificacao.date}
                    </Text>
                </View>

                {notificacao.atv.map((atividade, index) => (

                    <View key={index} style={[
                        styles.line,
                        atividade.notificacao_ready == 1 ? styles.corFundoNotificacaoLida : styles.corFundoNotificacaoNova
                    ]}>

                        { atividade.notificacao_ready == 0 &&
                        <View style={styles.statusNova} />
                        }

                        { atividade.notificacao_ready == 1 &&
                        <View style={styles.statusLida} />
                        }

                        <TouchableOpacity activeOpacity={0.8} style={styles.containerImagem}>
                            <Image style={styles.imgPerfil} source={{ uri: atividade.img_url_big.medium }} />
                        </TouchableOpacity>

                        <Text style={styles.lineText}>

                            <Text style={{fontWeight: 'bold', paddingRight: 5}}>
                                {atividade.perfil_nome}
                            </Text>

                            <Text> {
                                atividade.notificacao_nome
                            }</Text>
                        </Text>

                        { atividade.notificacao_tipo == 10 &&
                        <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                            <Text style={styles.labelBtnConexoes}>
                                CONECTAR
                            </Text>
                        </TouchableOpacity>
                        }

                        { atividade.notificacao_tipo == 3 || atividade.notificacao_tipo == 2 &&
                        <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                            <Text style={styles.labelBtnConexoes}>
                                DESCONECTAR
                            </Text>
                        </TouchableOpacity>
                        }

                        { atividade.notificacao_tipo == 11 &&
                        <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                            <Text style={styles.labelBtnConexoes}>
                                CANCELAR
                            </Text>
                        </TouchableOpacity>
                        }

                        { atividade.notificacao_tipo == 3 &&
                        <View style={{flexDirection: 'row', width: 95, height: '60%'}}>
                            <TouchableOpacity activeOpacity={0.6} style={[styles.btnConexoes, {flex: 1, maxWidth: 50, height: '100%'}]}>
                                <Text style={styles.labelBtnConexoes}>
                                    SIM
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.6} style={[styles.btnConexoes, {flex: 1, maxWidth: 50, height: '100%'}]}>
                                <Text style={styles.labelBtnConexoes}>
                                    NÃO
                                </Text>
                            </TouchableOpacity>
                        </View>
                        }

                        { atividade.notificacao_tipo == 8 &&
                        <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                            <Text style={styles.labelBtnConexoes}>
                                CONECTADOS
                            </Text>
                        </TouchableOpacity>
                        }

                        { atividade.notificacao_tipo == 5 &&
                        <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                            <Text style={styles.labelBtnConexoes}>
                                VER PERFIL
                            </Text>
                        </TouchableOpacity>
                        }

                        { atividade.notificacao_tipo == 7 &&
                        <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                            <Text style={styles.labelBtnConexoes}>
                                VER PRODUTO
                            </Text>
                        </TouchableOpacity>
                        }

                        { atividade.notificacao_tipo == 4 &&
                        <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                            <Text style={styles.labelBtnConexoes}>
                                VER PEDIDO
                            </Text>
                        </TouchableOpacity>
                        }

                        { atividade.notificacao_tipo == 1 || atividade.notificacao_tipo == 12 &&
                        <TouchableOpacity activeOpacity={0.6} style={styles.btnConexoes}>
                            <Text style={styles.labelBtnConexoes}>
                                VER POST
                            </Text>
                        </TouchableOpacity>
                        }

                    </View>
                ))}
            </View>
        );
    }else{
        return(
            <View />
        );
    }
};

export default ListItemLastNotificacoes;