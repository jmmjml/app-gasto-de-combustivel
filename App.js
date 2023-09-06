import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './globalStyles';

export default function App() {
  const [valorLitro, setValorLitro] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [km, setKm] = useState('');
  const [resultado, setResultado] = useState('');

  const executar = (valorLitro,quantidade,km) =>{
    let quantidad = parseInt(quantidade);
    let valor = parseInt(valorLitro);
    let quilo = parseInt(km)
    let dim = (valor * quantidad);
    let ks = ( dim / quilo);
    setResultado("R$"+ks.toFixed(2)+"/km");
  }
  const limpar = (valorLitro,quantidade,km) =>{
    setKm("");
    setQuantidade("");
    setValorLitro("");
    setResultado("")
  }



  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{width:"90%"}}>
          <Text style={styles.title}>Autonomia do Gasto de Combustível</Text>
        </View>
        <View>
          <Text style={styles.texto}>Valor do litro</Text>
          <View style={styles.viewInput}>
            <TextInput value={valorLitro} onChangeText={setValorLitro} style={styles.texto2} keyboardType='numeric'></TextInput>
          </View>
        </View>
        <View>
          <Text style={styles.texto}>Quantidade Abastecida</Text>
          <View style={styles.viewInput}>
            <TextInput value={quantidade} onChangeText={setQuantidade} style={styles.texto2} keyboardType='numeric'></TextInput>
          </View>
        </View>
        <View>
          <Text style={styles.texto}>Km Rodado</Text>
          <View style={styles.viewInput}>
            <TextInput value={km} onChangeText={setKm} style={styles.texto2} keyboardType='numeric'></TextInput>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Pressable style={styles.botao}  onPress={() => executar(valorLitro,quantidade,km)}><Text style={styles.texto}>Calcular valor</Text></Pressable>
          <Pressable style={styles.botao}  onPress={() => limpar(valorLitro,quantidade,km)}><Text style={styles.texto}>Limpar valor</Text></Pressable>
        </View>
        <View style={styles.viewInput2}>
          <Text style={styles.texto3}>{`Resultado: ${resultado}`}</Text>
        </View>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}
