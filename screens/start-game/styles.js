import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        color: theme.colors.textColor,
        fontSize: theme.fontSize.large,
        marginVertical: 10,
    },
    subtitle: {
        fontSize: theme.fontSize.medium,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        width: 40,
        textAlign: 'center',
        fontSize: theme.fontSize.xLarge,
        height: 60,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 25,
    },
})