import { StyleSheet, FlatList, View } from "react-native";

import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";
import ProductItem from "@/src/components/Product/ProductItem";

const product = products[0];

export default function MenuScreen() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}
