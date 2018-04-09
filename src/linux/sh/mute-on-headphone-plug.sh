#!/bin/bash
acpi_listen | while IFS= read -r line;
do
    if [ "$line" == "jack/headphone HEADPHONE plug" ]
    then
       amixer -D pulse set Master 0% mute
    elif [ "$line" == "jack/headphone HEADPHONE unplug" ]
    then
       amixer -D pulse set Master 0% mute
    fi
done
