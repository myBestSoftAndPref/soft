#!/bin/bash
red=`tput setaf 1`
green=`tput setaf 2`
magenta=`tput setaf 5`
underline=`tput smul`
bold=`tput bold`
reset=`tput sgr0`

if [ -z $1 ]; then
    echo "${red}${bold}There is ${underline}no path${reset}${red}${bold} to Firefox binary (executable) file.${reset}"
    echo -e "${green}The command to run the script should look like:${magenta}${underline} $HOME/<my-script-name>.sh ${bold}/opt/<path-to-my-firefox-directory>/firefox\\n${reset}"
    exit 1
fi

MY_PATH_TO_FF=$1

echo "${green}${underline}STEP 1${reset}"
echo -e "${green}The script is started. The script will run '$MY_PATH_TO_FF' as the 'sudo' to let you update Firefox.\\n${reset}"

MY_USERNAME_HOME=$HOME
MY_SCRIPT_UNIQUE_DIR="firefox-root-QWEIFJDAJD123"
MY_ROOT_FF_DIR=$MY_SCRIPT_UNIQUE_DIR.$(uuidgen)
MY_ROOT_FF_DIR_PATH=/tmp/$MY_ROOT_FF_DIR

if [ -d "$MY_ROOT_FF_DIR_PATH" ]; then
  MY_ROOT_FF_DIR=$MY_SCRIPT_UNIQUE_DIR.$(uuidgen)
  MY_ROOT_FF_DIR_PATH=/tmp/$MY_ROOT_FF_DIR
  while [ -d "$MY_ROOT_FF_DIR_PATH" ]
  do
    MY_ROOT_FF_DIR=$MY_SCRIPT_UNIQUE_DIR.$(uuidgen)
    MY_ROOT_FF_DIR_PATH=/tmp/$MY_ROOT_FF_DIR
  done
fi

sudo -s <<EOF

echo "${green}${underline}STEP 2${reset}"
echo -e "${green}These temporary directories are found and can be deleted:${reset}"
echo -n "${red}"
find /tmp -type d -maxdepth 1 -regex "^/tmp/$MY_SCRIPT_UNIQUE_DIR.*"
echo -e "${reset}${green}You can use ${reset}${magenta}${underline}sudo find /tmp -maxdepth 1 -type d -regex "^/tmp/$MY_SCRIPT_UNIQUE_DIR.*" -exec rm -r {} + ${reset}${green}command to delete them all.${reset} \\n"

mkdir $MY_ROOT_FF_DIR_PATH
echo "${green}${underline}STEP 3${reset}"
echo -e "${green}The script created a new temporary directory with a name:${reset}${magenta} $MY_ROOT_FF_DIR_PATH'${reset}. ${green}The directory will be used to store temporary Firefox profile during the update.\\n${reset}"

echo "${green}${underline}STEP 4${reset}"
echo -e "${green}Copying ${magenta}$MY_USERNAME_HOME/.Xauthority ${green}file to ${magenta}$MY_ROOT_FF_DIR_PATH/ ${green}directory. And setting ${magenta}root ${green}rights to${magenta} $MY_ROOT_FF_DIR_PATH/.Xauthority\\n${reset}"
cp $MY_USERNAME_HOME/.Xauthority $MY_ROOT_FF_DIR_PATH/
chown root: $MY_ROOT_FF_DIR_PATH/.Xauthority

echo "${green}${underline}STEP 5${reset}"
echo "${green}Starting to run Firefox... Now ${underline}you can update Firefox${reset}${green} through ${bold}About${reset}${green} (e.g. Firefox, Thunderbird and so on) menu.${reset}"
echo -e ${green}"Please ${bold}DON NOT${reset}${green} use ${magenta}${underline}CONTROL + C${reset}${green} keys to close Firefox! In that case temporary Firefox profile directory ${bold}WILL NOT${reset}${green} be deleted!\\n${reset}"
bash -c "HOME=$MY_ROOT_FF_DIR_PATH XAUTHORITY=$MY_ROOT_FF_DIR_PATH/.Xauthority $MY_PATH_TO_FF"

echo -e "\\n${green}${underline}STEP 6${reset}"
echo "${green}Deleting temporary Firefox profile folder ${magenta}$MY_ROOT_FF_DIR_PATH ${reset}${green}to clear up.${reset}"
rm -rf $MY_ROOT_FF_DIR_PATH
echo -e "${green}The temporary Firefox directory${magenta} '$MY_ROOT_FF_DIR_PATH' ${reset}${green}was deleted but you can check if it is actually deleted.\\n${reset}"

echo "${green}${underline}DONE${reset}"
EOF
