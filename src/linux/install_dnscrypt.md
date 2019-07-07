1. Скачать последнюю версию отсюда `https://github.com/jedisct1/dnscrypt-proxy/releases` и распаковать в `/opt/dnscrypt-proxy/`
2. Переименовать файл `/opt/dnscrypt-proxy/example-dnscrypt-proxy.toml` в `/opt/dnscrypt-proxy/dnscrypt-proxy.toml`
3. в файле `dnscrypt-proxy.toml` установить опции:
    ```toml
    doh_servers = false  
    require_dnssec = true  
    require_nolog = true  
    require_nofilter = true  
    ignore_system_dns = true
    ```
4. Расскоменнтировать и установить опцию `server_names` и установить ей значения:  `server_names = ['scaleway-fr', 'bottlepost-dns-nl', 'dnscrypt.nl-ns0']`  
где `'scaleway-fr', 'bottlepost-dns-nl', 'dnscrypt.nl-ns0'` это имена серверов из списка https://dnscrypt.info/public-servers/ (в конфиге `dnscrypt-proxy.toml` прописан url на этот список в текстовом виде, а на сайте вид удобнее). Выбирать те для которых стоит `dnssec`, `no log`, n`o filter`
5. установить в настройках сети `Auto (ip only)` чтобы не подставляло dns сервер само и вписать в список dns серверов адресс `127.0.0.1`
6. проверить на сайте https://browserleaks.com/ip какие dns используются (чтобы были те что в списке)
7. установить dnscrypt-proxy как сервис командой `sudo /opt/dnscrypt-proxy/dnscrypt-proxy -service install`
8. запустить dnscrypt-proxy как сервис командой (просто установить недостаточно, нужен запуск) `sudo /opt/dnscrypt-proxy/dnscrypt-proxy -service start`
9. После перезагрузки сервис уже будет работать, его не нужно добавлять в авто загрузку вручную. Проверить работает или нет можно командой `systemctl status dnscrypt-proxy`

**Остановить** этот сервис можно командой `sudo /opt/dnscrypt-proxy/dnscrypt-proxy -service stop`

Чтобы DNS **заработало** если не запущен dnscrypt нужно удалить `127.0.0.1` из настроке dns сети.

Предлагаю **выбирать сервера** с текстом в названиях: `.nl, -nl, -fr, .fr` это сервера Нидерландов или Франции.