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
    setResultado(ks.toFixed(2));
  }



  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
          <Pressable style={styles.botao}  onPress={() => executar(valorLitro,quantidade,km)}><Text style={styles.texto}>Buscar valor</Text></Pressable>
        </View>
        <View>
          <Text style={styles.texto}>{`Resultado: ${resultado}`}</Text>
        </View>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}
