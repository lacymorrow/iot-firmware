# Trigger the device on/off based on the temperature``
import storage
import subprocess
import json

DEBUG = True
TMP_DIR = "/home/pi/iot_tmp/"
STORAGE_FILE = TMP_DIR + ".iot_storage_"

def log(text):
    print("[Sensors] %s" % text)

def getTemperature():
    try:
        # Get temp/humidity from device
        result = (
            subprocess.check_output(
                ["sudo", "python", "/home/pi/firmware/drivers/temperhum/temperhum.py", "--nosymbols"]
            )
            .decode()
            .strip()
        )
        [temp] = result.split(" ")
        if "message" in temp:
            temp = temp["message"]

        return temp
    except:
        return 0

def doesNeedChange():
    trigger_temp = storage.get({"key": "trigger"})
    temp = getTemperature()
    if temp < trigger_temp:
        return True
    return False



def __main__():
    temp = float(getTemperature())
    trigger_temp = float(storage.get({"key": "trigger"}))
    print('Current temp: ' + temp)
    print('Trigger temp: ' + trigger_temp)
    if temp < trigger_temp+0.5:
        print("Turning on")
        subprocess.check_output(["sudo", "bash", "/home/pi/firmware/bin/util/gpio.sh", "on"])
    else:
        print("Turning off")
        subprocess.check_output(["sudo", "bash", "/home/pi/firmware/bin/util/gpio.sh", "off"])

if __name__ == "__main__":
    __main__()