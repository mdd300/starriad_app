import React from 'react';
import {View, Text, Image, TouchableOpacity, Animated, Easing, TextInput} from 'react-native';
import {style, DetalhesPedidoStyles} from './GradeProduto-styles';


export default class GradeProduto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            variantes: this.props.variantes,
            animation_icon: new Animated.Value(0),
            animation_grade: new Animated.Value(0),
            indexActived: null
        }

    }

    render() {
        let icon_rotate = this.state.animation_icon.interpolate({
            inputRange: [0, 100],
            outputRange: ['0deg', '180deg']
        });


        return this.state.variantes.map((value, index) => {
            return (
                <View>
                    <TouchableOpacity onPress={() => {
                        this.activedVariante(index)
                    }}>
                        <View key={index} style={style.containerHeader}>
                            <View style={style.containerLeft}>
                                {this.getCor(value.cor_valor, value.image_valor)}

                                <View style={style.containerText}>
                                    <Text>{value.cor_nome}</Text>
                                    <Text style={style.otherText}>{value.obs}</Text>
                                </View>
                            </View>

                            <Animated.Image
                                style={[style.iconContainer, ( this.state.indexActived === index ? {transform: [{rotateZ: icon_rotate}]} : null)
                                ]} resizeMode={'contain'}
                                source={require('../../../../assets/imgs/png/icons/seta-down.png')}/>

                        </View>
                    </TouchableOpacity>

                    <View>
                        {this.grade(value, index)}
                    </View>
                </View>


            )
        })
    }

    actionButtonVariante(index) {
        this.activedVariante(index);
        // this.calc();

    }

    downSeta() {
        Animated.spring(this.state.animation_icon, {
            toValue: 0,
        }).start();
    }


    upSeta() {
        Animated.spring(this.state.animation_icon, {
            toValue: 100,
        }).start();
    }


    hideGradeAnimation = (() => {
        Animated.timing(this.state.animation_grade, {
            toValue: 0,

        }).start();
    });

    showGradeAnimation = (() => {
        Animated.spring(this.state.animation_grade, {
            toValue: 100,
            bounciness: 25,
            velocity: 100,
            // duration:1500,
        }).start();
    });


    grade(variante, indicePai) {

        let show_grade = this.state.animation_grade.interpolate({
            inputRange: [0, 65],
            outputRange: [0, 5]
        });
        let transform = [{translateY: show_grade}]

        if (variante.actived) {
            let grade = variante.grade;
            return (
                <View style={[DetalhesPedidoStyles.containerInfosTamanhos]}>
                    <View style={DetalhesPedidoStyles.tamanhosDisponiveis}>
                        <View style={DetalhesPedidoStyles.containerTitleTamanhosDisponiveis}>
                            <View style={DetalhesPedidoStyles.viewLabelTitle}>
                                <Text style={DetalhesPedidoStyles.labelTitle}>Tamanho</Text>
                            </View>
                            <View style={DetalhesPedidoStyles.viewLabelTitle}>
                                <Text style={DetalhesPedidoStyles.labelTitle}>Peças Disponiv.</Text>
                            </View>
                        </View>
                        {grade.map((value, index) => {
                            return (
                                <View key={index} style={DetalhesPedidoStyles.containerTamanhosDisponiveis}>

                                    <View style={DetalhesPedidoStyles.viewNomeTamanho}>
                                        <Text> {value.tamanho_nome}</Text>
                                    </View>

                                    <View style={DetalhesPedidoStyles.viewQtdTamanho}>
                                        <Text> {value.tamanho_quant}</Text>
                                    </View>

                                </View>
                            )
                        })}
                        <View>


                        </View>

                    </View>

                    <View style={DetalhesPedidoStyles.containerInfosQtd}>

                        <View style={DetalhesPedidoStyles.infosQtd}>

                            <View style={DetalhesPedidoStyles.titleQtd}>
                                <Text style={DetalhesPedidoStyles.labelTitle}>Quantidade</Text>
                            </View>

                        </View>

                        <View>
                            {grade.map((value, index) => {
                                return (
                                    <View key={index} style={DetalhesPedidoStyles.containerBtnMaisMenosQtd}>
                                        <TouchableOpacity onPress={() => {
                                            value.tamanho_quant === 0 ? null : this.subtractGrade(value)

                                        }} style={DetalhesPedidoStyles.menosQtdMais}>
                                            <Text style={[
                                                DetalhesPedidoStyles.textMenosMais,
                                                value.tamanho_quant === 0 ? DetalhesPedidoStyles.textBloqueado : null
                                            ]}>-</Text>
                                        </TouchableOpacity>

                                        <View style={DetalhesPedidoStyles.menosQtdMais}>
                                            <View
                                                style={[style.containerInput, (value.quantidade > value.tamanho_quant ? style.errorInput : null)]}>
                                                <TextInput
                                                    style={{textAlign: 'center', borderWidth: 0}}
                                                    keyboardType='numeric'
                                                    maxLength={3}
                                                    onChangeText={(text) => this.calc(text, value)}
                                                    value={value.quantidade}
                                                    underlineColorAndroid='#FFF'
                                                    onFocus={() => this.focus(value)}
                                                    onBlur={() => this.blur(value)}
                                                    editable={value.tamanho_quant === 0 ? false : true}
                                                    defaultValue={value.quantidade === 0 || value.quantidade == '' ? '0' : value.quantidade.toString()}
                                                />
                                            </View>
                                        </View>

                                        <TouchableOpacity onPress={() => {
                                            value.tamanho_quant == 0 ? null : this.sumGrade(value)
                                        }} style={DetalhesPedidoStyles.menosQtdMais}>
                                            <Text style={[
                                                DetalhesPedidoStyles.textMenosMais,
                                                value.tamanho_quant == 0 ? DetalhesPedidoStyles.textBloqueado : null
                                            ]}>+</Text>
                                        </TouchableOpacity>

                                    </View>
                                )
                            })}

                        </View>
                    </View>
                </View>

            )
        } else {
            {
                null
            }
        }

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
        // this.showGradeAnimation();
    }

    activedVariante(index) {
        this.state.variantes[index].actived = !this.state.variantes[index].actived;
        this.state.indexActived = index;


        if (this.state.variantes[index].actived) {
            this.upSeta();
            this.setState({variantes: this.state.variantes});
            this.showGradeAnimation();
        } else {
            this.downSeta();
            this.setState({variantes: this.state.variantes});
            this.hideGradeAnimation();
        }

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

                <View style={[style.corContainer, {backgroundColor: cor}]}></View>
            )
        } else if (image !== '') {
            return (
                <Image style={style.imageContainer} resizeMode={'cover'}
                       source={{uri: image}}/>
            )
        }
    }


}

