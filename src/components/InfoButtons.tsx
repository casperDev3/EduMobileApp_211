import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const InfoButtons = ({forum, changePinnedStatus, menuVisible, toggleMenu, hideMenu} : any) => {
    return (
        <View style={styles.infoButtons}>
            {forum.pinned &&
                <TouchableOpacity onPress={() => {changePinnedStatus(forum.id);}}>
                    <Image
                        style={styles.infoButtonsPin}
                        source={require('../assets/pin.png')}
                    />
                </TouchableOpacity>
            }
            <TouchableOpacity
                style={styles.infoButtonsOption}
                onPress={() => {toggleMenu();}}>
                <View style={styles.infoButtonsOptionDot} />
                <View style={styles.infoButtonsOptionDot} />
                <View style={styles.infoButtonsOptionDot} />
            </TouchableOpacity>
            {menuVisible && (
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => { changePinnedStatus(forum.id); hideMenu(); }}>
                        <Text style={styles.menuItem}>{forum.pinned ? 'Unpin' : 'Pin'}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    infoButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoButtonsPin: {
        minWidth: 16,
        maxWidth: 16,
        minHeight: 16,
        maxHeight: 16,
    },
    infoButtonsOption: {
        flexDirection: 'row',
        marginLeft: 12,
    },
    infoButtonsOptionDot: {
        minWidth: 4,
        maxWidth: 4,
        minHeight: 4,
        maxHeight: 4,
        backgroundColor: '#000',
        marginLeft: 2,
        borderRadius: 50,
    },
    // menu
    menu: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        zIndex: 999,
    },
    menuItem: {
        fontSize: 12,
        paddingVertical: 4,
        color: '#333',
    },
});

export default InfoButtons;
