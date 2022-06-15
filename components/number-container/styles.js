import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: theme.colors.primary,
        padding: 15,
        borderRadius: 10,
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    number: {
        color: theme.colors.primary,
        fontSize: theme.fontSize.xLarge,
        fontFamily: "source-sans-semibold",
    },
});