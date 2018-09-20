#!/bin/bash

case "$1" in
    thaw|resume)
        logfile="$HOME/zero.log"
        
        echo "$(date)" >> $logfile
        echo "cpu freq before state writing (has to be zero)" >> $logfile
        rdmsr -a 0x19a >> $logfile
        
        echo "turbo before writing (has to be 0 if you have turbo cpu mode)" >> $logfile
        cat /sys/devices/system/cpu/intel_pstate/no_turbo >> $logfile
        
        modprobe msr
        wrmsr -a 0x19a 0x0
        
        echo 1 | sudo tee /sys/devices/system/cpu/intel_pstate/no_turbo
        
        echo "cpu freq after writing (has to be zero)" >> $logfile
        rdmsr -a 0x19a >> $logfile
        
        echo "turbo after writing (has to be 1 if you have turbo cpu mode)" >> $logfile
        cat /sys/devices/system/cpu/intel_pstate/no_turbo >> $logfile
        
        #echo "" >> $logfile
        ;;
esac
