#!/bin/bash

sudo pacman -Syu avahi nss-mdns docker docker-compose salt curl wget

systemctl start avahi-daemon

systemctl enable avahi-daemon