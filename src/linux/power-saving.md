# CPU


```sh
# смотрим режимы на каждом ядре
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# сохранение энергии
echo "powersave" | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# изменение частоты динамически (по умолчанию)
echo "ondemand" | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# максимальная производительность
echo "performance" | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
```