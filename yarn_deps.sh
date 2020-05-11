
# This function will invoke yarn to install packages
function yarn_install() {
	while read package
	do
		echo -ne "+ Installing ${package}..."
		echo -ne "\r\t\t\t\t\t\t\t\t"
		yarn add "${package}" &> /dev/null
		[ $? -eq 0 ] && stat="DONE" || stat="FAIL"
		echo -ne "[ ${stat} ]\n"
	done
}

# Add the packages to this list
cat << EOF | yarn_install
jsotp
react-native-elements
react-native-vector-icons
react-native-nfc-manager
@react-native-community/async-storage
react-native-reanimated
react-native-gesture-handler
react-native-screens
react-native-safe-area-context
@react-native-community/masked-view
@react-navigation/native
@react-navigation/stack
react-native-permissions
react-native-camera
react-native-qrcode-scanner
EOF

mkdir -p android/app/src/main/assets/fonts
cp node_modules/react-native-vector-icons/Fonts/*.ttf android/app/src/main/assets/fonts/
