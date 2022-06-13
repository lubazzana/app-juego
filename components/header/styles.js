import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    title: {
        color: theme.colors.textSecondaryColor,
        fontSize: theme.fontSize.xLarge,
        // fontFamily: 'source-sans-bold',
    }
});