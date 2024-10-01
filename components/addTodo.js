import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function AddTodo({ submitHandler }) {
  let [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
  };

  return (
    <View>
      <TextInput style={styles.input} placeholder="new todo..." onChangeText={changeHandler} />
      <Button color="coral" onPress={pressHandler} title="add todo" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
