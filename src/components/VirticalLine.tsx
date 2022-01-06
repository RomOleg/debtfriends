import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface Props {
    title?: string,
}

const VerticalLine: React.FC<Props> = ({ title }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.line} />
            {title &&
                <View>
                    <Text style={{ width: 50, textAlign: 'center' }}>{title}</Text>
                </View>
            }
            <View style={styles.line} />
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    }
});

export default VerticalLine;