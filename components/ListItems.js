import { View, Text, StyleSheet } from 'react-native';

export default function ListItem({ text }) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    itemText: {
        fontSize: 16,
    },
});
