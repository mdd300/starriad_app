import React from 'react';
import {View, Text, Image, TouchableOpacity, Animated, TextInput} from 'react-native';
import {style, DetalhesPedidoStyles} from './GradeProduto-styles';
import BotoesCarrinho from '../botoesCarrinho/BotoesCarrinho';


export default class GradeProduto extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            variantes: this.props.variantes,
            grade: this.props.grade,
            animation_icon: new Animated.Value(0),
            animation_grade: new Animated.Value(0),
            indexActived: null
        }
    }

    render() {
        return (
            this.renderPage()
        )
    }

    renderPage(){
        return(
            <View>
                <View style={style.containerPage}>
                    <View style={style.contentHeaderGrade}>
                        <View style={style.containerTitleGrade}>
                            <Text style={style.textHeaderGrade}>
                                Cores
                            </Text>
                        </View>

                        {this.state.grade.map((value, index) => (
                            <View key={index} style={style.containerTamanhosNomes}>
                                <Text style={style.textHeaderGrade}>
                                    {value.tamanho_nome}
                                </Text>
                            </View>
                        ))}

                        <View style={style.containerTitleGrade}>
                            <Text style={style.textHeaderGrade}>
                                Qtd
                            </Text>
                        </View>
                    </View>

                    <View style={style.containerGradeVariantes}>
                        {this.renderVariantes()}
                    </View>

                    <View style={style.contentHeaderGrade}>
                        <View style={[style.containerTamanhosNomes, {flex: 3, padding: 10, alignItems: 'flex-start'}]}>
                            <Text style={style.textHeaderGrade}>
                                Total:
                            </Text>
                        </View>

                        <View style={[style.containerTamanhosNomes, {padding: 10}]}>
                            <Text style={[style.textHeaderGrade, {fontWeight: 'bold'}]}>
                                0
                            </Text>
                        </View>

                        <View style={[style.containerTamanhosNomes, {flex: 2, marginRight: 0, padding: 10}]}>
                            <Text style={[style.textHeaderGrade, {fontWeight: 'bold'}]}>
                                R$ 0
                            </Text>
                        </View>
                    </View>
                </View>
                {this.renderBotoes()}
            </View>
        );
    }

    // Renderiza na tela as variantes do produto e sua grade de tamanhos
    renderVariantes(){
        return(
            this.state.variantes.map((variante, index) => (

                <View key={index} style={[style.contentHeaderGrade, {marginBottom: 2}]}>

                    <View style={style.corVariante}>
                        {this.getCor(variante.cor_valor, variante.image_valor)}
                    </View>

                    {variante.grade.map((grades, index) => (

                        <View key={index} style={style.containerGradeTamanhos}>

                            <View style={DetalhesPedidoStyles.containerBtnMaisMenosQtd}>
                                <TouchableOpacity onPress={() => {grades.tamanho_quant == 0 ? null : this.sumGrade(grades)}}
                                                  style={[DetalhesPedidoStyles.menosQtdMais, {marginBottom: 5}]}>
                                    <Text style={[DetalhesPedidoStyles.textMenosMais, grades.tamanho_quant == 0 ? DetalhesPedidoStyles.textBloqueado : null]}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                                <View style={[DetalhesPedidoStyles.menosQtdMais, {backgroundColor: '#fff', borderColor: '#e6e6e6', borderWidth: 1}, (grades.quantidade > grades.tamanho_quant ? style.errorInput : null)]}>
                                    <View style={[style.containerInput, (grades.quantidade > grades.tamanho_quant ? style.textErrorInput : null)]}>
                                        <TextInput
                                            style={{textAlign: 'center', borderWidth: 0}}
                                            keyboardType='numeric'
                                            maxLength={3}
                                            onChangeText={(text) => this.calc(text, grades)}
                                            value={grades.quantidade}
                                            underlineColorAndroid='#FFF'
                                            onFocus={() => this.focus(grades)}
                                            onBlur={() => this.blur(grades)}
                                            editable={grades.tamanho_quant === 0 ? false : true}
                                            defaultValue={grades.quantidade === 0 || grades.quantidade == '' ? '0' : grades.quantidade.toString()}
                                        />
                                    </View>
                                </View>

                                <TouchableOpacity onPress={() => {grades.tamanho_quant === 0 ? null : this.subtractGrade(grades)}}
                                                  style={[DetalhesPedidoStyles.menosQtdMais, {marginTop: 5, marginBottom: 5}]}>
                                    <Text style={[DetalhesPedidoStyles.textMenosMais, grades.tamanho_quant === 0 ? DetalhesPedidoStyles.textBloqueado : null]}>
                                        -
                                    </Text>
                                </TouchableOpacity>

                                <View style={[DetalhesPedidoStyles.qtdDisponivel]}>
                                    <Text style={[DetalhesPedidoStyles.textQtdDisponivel]}>
                                        {grades.tamanho_quant} Disp.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}

                    <View style={[style.corVariante, {marginRight: 0}]}>
                        <Text style={{fontSize: 15}}>
                            0
                        </Text>
                    </View>
                </View>
            ))
        );
    }

    renderBotoes(){
        return(
          <BotoesCarrinho />
        );
    }

    blur(grade) {
        if (grade.quantidade == 0 || grade.quantidade == '0' || grade.quantidade == 'NaN') {
            grade.quantidade = 0
        }
        this.setState({variantes: this.state.variantes});
    }

    focus(grade) {
        if (grade.quantidade == 0 || grade.quantidade == '0') {
            grade.quantidade = ''
        }
        this.setState({variantes: this.state.variantes});
    }

    calc(valor, grade) {
        parseInt(valor);
        if (valor > grade.tamanho_quant) {
            grade.quantidade = valor
        } else {
            grade.quantidade = valor
        }
        this.setState({variantes: this.state.variantes});
    }

    sumGrade(grade) {
        if (grade.quantidade > grade.tamanho_quant) {
            grade.quantidade++;
        } else {
            grade.quantidade++;

        }
        this.setState({variantes: this.state.variantes})
        console.log(grade)
    }

    subtractGrade(grade) {
        if (grade.quantidade == 0) {

        } else {
            grade.quantidade--;
            this.setState({variantes: this.state.variantes})
        }
    }

    getCor(cor, image) {
        if (cor !== '') {
            return (
                <View style={[style.corContainer, {backgroundColor: cor}]} />
            )
        } else if (image !== '') {
            return (
                <Image style={style.imageContainer} resizeMode={'cover'}
                       source={{uri: image}}/>
            )
        }
    }
}

