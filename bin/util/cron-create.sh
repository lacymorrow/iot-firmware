#!/bin/bash

# Create a cron job
# @param $1 - The command to run
# @param $2 - The schedule

crontab -l > mycron 2>/dev/null

echo "$2 $1" >> mycron

crontab mycron
rm mycron
