// HomeScreen.jsx
import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { reference } from "./firebaseConfig";

const Database = () => {
  // Read data
  useEffect(() => {
    const onValueChange = reference.on("value", (snapshot) => {
      console.log("User data: ", snapshot.val());
    });

    // cleanup listener when component unmounts
    return () => reference.off("value", onValueChange);
  }, []);

  // Write data
  const addUserData = () => {
    reference.set({
      name: "Grace",
      age: 22,
    });
  };

  return (
    <View>
      <Text>Firebase Realtime DB Example</Text>
      <Button title="Save User" onPress={addUserData} />
    </View>
  );
};

export default Database;
