import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "@/src/constants/Colors";
import { Product } from "@/src/types";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: Colors.light.tint,
    fontSize: 16,
    fontWeight: "600",
  },
});
