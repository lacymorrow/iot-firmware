import subprocess
import json

def log(text):
    print("[Sensors] %s" % text)

def getTemperatureHumidity(self):
    try:
        # Get temp/humidity from device
        result = (
            subprocess.check_output(
                ["sudo", "temperhum.py", "--nosymbols"],
            )
            .decode()
            .strip()
        )
        [temp, hum] = result.split(" ")

        response = {
            "message": {
                "temperature": temp,
                "humidity": hum,
            }
        }

    except:
        response = {"error": "getTemperatureHumidity Error"}

    if DEBUG:
        self.log("getTemperatureHumidity: " + str(response))

    return json.dumps(response)
