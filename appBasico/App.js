import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
 
export default function App() {
  const [texto, setTexto] = useState('Texto');
  const [numero, setNumero] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{texto} {numero}</Text>

      <Button title="Texto" onPress={function(){ 
        if (texto == "Texto"){
          setTexto("Palavra");
        }
        else{
          setTexto("Texto")
        }
        }} />

      <View style={styles.row}>
      <Button title="Numero +" onPress={() => setNumero(numero + 1)}/>
      <Button title="Numero -" onPress={() => setNumero(numero - 1)}/>
      </View>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20, 
    color: 'white', 
  },
  row: {
    flexDirection: 'row',  // Faz os botões ficarem na mesma linha
    marginBottom: 20,      // Adiciona um espaçamento entre os botões da linha
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 10,  // Espaçamento entre os botões na linha
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});