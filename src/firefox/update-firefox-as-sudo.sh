#!/bin/bash

# Pass path to Firefox HOME directory, directory that contents firefox binary file.
# Example: update-firefox-as-sudo.sh /opt/firefoxSocial

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
echo -e "${green}The script is started. The script will run '$MY_PATH_TO_FF/firefox' as the 'sudo' to let you update Firefox.\\n${reset}"

MY_USERNAME_HOME=$HOME
MY_SCRIPT_UNIQUE_DIR="firefox-root-QWEIFJDAJD123"
MY_ROOT_FF_DIR=$MY_SCRIPT_UNIQUE_DIR.$(uuidgen)
MY_ROOT_FF_DIR_PATH=/tmp/$MY_ROOT_FF_DIR

# recognizing of temporary /root directory path
if [ -d "$MY_ROOT_FF_DIR_PATH" ]; then
  MY_ROOT_FF_DIR=$MY_SCRIPT_UNIQUE_DIR.$(uuidgen)
  MY_ROOT_FF_DIR_PATH=/tmp/$MY_ROOT_FF_DIR
  while [ -d "$MY_ROOT_FF_DIR_PATH" ]
  do
    MY_ROOT_FF_DIR=$MY_SCRIPT_UNIQUE_DIR.$(uuidgen)
    MY_ROOT_FF_DIR_PATH=/tmp/$MY_ROOT_FF_DIR
  done
fi

# recognizing of Firefox home directory policy.json path if exists
PATH_TO_FF_POLICY_DIR="$MY_PATH_TO_FF/distribution"
PATH_TO_FF_POLICY="$PATH_TO_FF_POLICY_DIR/policies.json"
PATH_TO_FF_POLICY_BACKUP=$PATH_TO_FF_POLICY.$MY_SCRIPT_UNIQUE_DIR
POLICY_BACKUP_FILE_PATHS="There is no policy.json.xxx files in the directory. All is fine."

if [ -d "$PATH_TO_FF_POLICY_DIR" ] && [ -f "$PATH_TO_FF_POLICY" ]; then
    while [ -f "$PATH_TO_FF_POLICY_BACKUP" ]
    do
        PATH_TO_FF_POLICY_BACKUP=$PATH_TO_FF_POLICY_BACKUP.$(uuidgen)
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

PATH_TO_FF_POLICY_DIR="$MY_PATH_TO_FF/distribution"
PATH_TO_FF_POLICY="$PATH_TO_FF_POLICY_DIR/policies.json"
PATH_TO_FF_POLICY_BACKUP=$PATH_TO_FF_POLICY.$MY_SCRIPT_UNIQUE_DIR

echo "${green}${underline}STEP 5${reset}"
echo "${green}Checking if Firefox ${bold}policy${reset}${green} file is existed. There are ${green}${bold}policy${reset}${green} backup files, maybe it's result of the script halting and you want to rename one of them to '${magenta}policies.json${reset}${green}':${reset}"
echo -n -e "\\n${red}"
find $PATH_TO_FF_POLICY_DIR -maxdepth 1 -type f -regex "^$PATH_TO_FF_POLICY.+"
echo -n "5${reset}"
if [ -d "$PATH_TO_FF_POLICY_DIR" ] && [ -f "$PATH_TO_FF_POLICY" ]; then
    echo "${green}Firefox ${magenta}${underline}$PATH_TO_FF_POLICY ${reset}${green}${bold}policy${reset}${green} file is found! The Firefox ${bold}policy${reset}${green} can blocking Firefox updating. The Firefox ${bold}policy${reset}${green} file will be moved to ${magenta}${underline}$PATH_TO_FF_POLICY_BACKUP ${reset}${green}to prevent the potential update blocking."
    echo -e "${green}Creating of temporary ${bold}policy${reset}${green} file to let Firefox to be updated in case ${bold}policy${reset}${green} blocks updating.\\n${reset}"
    
    mv $PATH_TO_FF_POLICY $PATH_TO_FF_POLICY_BACKUP
fi

echo -e "\\n${green}${underline}STEP 6${reset}"
echo "${green}Starting to run Firefox... Now ${underline}you can update Firefox${reset}${green} through ${bold}About${reset}${green} (e.g. Firefox, Thunderbird and so on) menu.${reset}"
echo -e ${green}"Please ${bold}DON NOT${reset}${green} use ${magenta}${underline}CONTROL + C${reset}${green} keys to close Firefox! In that case temporary Firefox profile directory ${bold}WILL NOT${reset}${green} be deleted!\\n${reset}"
bash -c "HOME=$MY_ROOT_FF_DIR_PATH XAUTHORITY=$MY_ROOT_FF_DIR_PATH/.Xauthority $MY_PATH_TO_FF/firefox"

echo -e "\\n${green}${underline}STEP 7${reset}"
echo "${green}Deleting temporary Firefox profile folder ${magenta}$MY_ROOT_FF_DIR_PATH ${reset}${green}to clear up.${reset}"
rm -rf $MY_ROOT_FF_DIR_PATH
echo -e "${green}The temporary Firefox directory${magenta} '$MY_ROOT_FF_DIR_PATH' ${reset}${green}was deleted but you can check if it is actually deleted.\\n${reset}"

if [ -d "$PATH_TO_FF_POLICY_DIR" ] && [ -f "$PATH_TO_FF_POLICY_BACKUP" ]; then
    echo "${green}${underline}STEP 8${reset}"
    echo -e "${green}Reverting Firefox policy in case if it is replaced to let Firefox update.\\n${reset}"
    
    mv $PATH_TO_FF_POLICY_BACKUP $PATH_TO_FF_POLICY
fi

echo "${green}${underline}DONE.${reset}"
read

EOF
