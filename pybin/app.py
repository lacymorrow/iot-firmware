"""
IoT Device Management Application

This script provides a web-based interface for managing IoT devices using pywebview.
It includes functionality for device control, system information retrieval, and configuration management.
"""

import ast
import json
import os
import random
import re
import subprocess
import time
import webview
import logging
from typing import Dict, Any

import cron

# Configuration
DEBUG = True
TMP_DIR = "/home/pi/iot_tmp/"
STORAGE_FILE = os.path.join(TMP_DIR, ".iot_storage_")

# Set up logging
logging.basicConfig(level=logging.DEBUG if DEBUG else logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def parse_react_json(react_json: str) -> Dict[str, Any]:
    """Parse JSON data from React."""
    try:
        return ast.literal_eval(react_json)
    except (ValueError, SyntaxError):
        try:
            return json.loads(react_json)
        except json.JSONDecodeError:
            logger.error(f"Failed to parse JSON: {react_json}")
            return {}

class Api:
    def __init__(self):
        self.hw_id = self._get_hw_id()
        logger.info(f"Initialized Python-JS API with HardwareID: {self.hw_id}")

    def _get_hw_id(self) -> str:
        """Get Raspberry Pi hardware ID."""
        try:
            with open("/proc/cpuinfo", "r") as f:
                for line in f:
                    if line.startswith("Serial"):
                        return line.split(":")[-1].strip()
        except IOError:
            logger.error("Failed to read hardware ID", exc_info=True)
        return "ERROR000000000"

    def get_hardware_id(self) -> str:
        """Return the hardware ID as JSON."""
        return json.dumps({"message": self.hw_id})

    def get(self, params: str) -> str:
        """Retrieve a value from storage."""
        p = parse_react_json(params)
        if not p or "key" not in p:
            return json.dumps({"error": "No key provided"})

        key = p["key"]
        try:
            with open(f"{STORAGE_FILE}{key}", "r") as f:
                value = f.read()
            try:
                response = {"message": ast.literal_eval(value)}
            except (ValueError, SyntaxError):
                response = {"message": value}
        except IOError:
            logger.error(f"Failed to read from storage: {key}", exc_info=True)
            response = {"message": ""}

        logger.debug(f"get: {params} - {response}")
        return json.dumps(response)

    def set(self, params: str) -> str:
        """Set a value in storage."""
        p = parse_react_json(params)
        if not p or "key" not in p or "data" not in p:
            return json.dumps({"error": "Key and value must be provided"})

        key, data = str(p["key"]), str(p["data"])
        try:
            os.makedirs(TMP_DIR, exist_ok=True)
            with open(f"{STORAGE_FILE}{key}", "w") as f:
                f.write(data)
            logger.info(f"Set {key}: {data}")
            response = {"message": "ok"}
        except IOError:
            logger.error(f"Failed to set {key}", exc_info=True)
            response = {"error": "Could not set file"}

        logger.debug(f"set: {params} - {response}")
        return json.dumps(response)

    def device_on(self) -> str:
        """Turn on a device."""
        device = "26"
        try:
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/util/gpio.sh", "write", device, "1"],
                stderr=subprocess.STDOUT
            )
            response = {"message": process.decode("utf-8").strip()}
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to turn on device: {e}", exc_info=True)
            response = {"error": "Could not turn on device"}

        logger.debug(f"device_on: {response}")
        return json.dumps(response)

    def device_off(self) -> str:
        """Turn off a device."""
        device = "26"
        try:
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/util/gpio.sh", "write", device, "0"],
                stderr=subprocess.STDOUT
            )
            response = {"message": process.decode("utf-8").strip()}
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to turn off device: {e}", exc_info=True)
            response = {"error": "Could not turn off device"}

        logger.debug(f"device_off: {response}")
        return json.dumps(response)

    def get_device_status(self) -> str:
        """Get the status of a device."""
        device = "26"
        try:
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/util/gpio.sh", "read", device],
                stderr=subprocess.STDOUT
            )
            result = process.decode("utf-8")
            response = {"message": "on" if "1" in result else "off"}
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to get device status: {e}", exc_info=True)
            response = {"error": "Could not read device status"}

        logger.debug(f"get_device_status: {response}")
        return json.dumps(response)

    def get_ip_address(self) -> str:
        """Get the IP address of the device."""
        try:
            process = subprocess.check_output(["hostname", "-I"])
            ip = process.decode("utf-8").split()[0]
            response = {"message": ip}
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to get IP address: {e}", exc_info=True)
            response = {"error": "Could not get IP"}

        logger.debug(f"get_ip_address: {response}")
        return json.dumps(response)

    def get_random_number(self, params: str) -> str:
        """Generate a random number."""
        rand_num = random.randint(0, 100000000)
        message = f"Random IO: {rand_num}"
        response = {"message": message}
        return json.dumps(response)

    def get_temperature_humidity(self) -> str:
        """Get the temperature and humidity readings."""
        try:
            result = subprocess.check_output(["sudo", "temperhum.py", "--nosymbols"]).decode().strip()
            temp, hum = result.split()
            response = {"message": {"temperature": temp, "humidity": hum}}
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to get temperature and humidity: {e}", exc_info=True)
            response = {"error": "getTemperatureHumidity Error"}

        logger.debug(f"get_temperature_humidity: {response}")
        return json.dumps(response)

    def get_wifi_info(self) -> str:
        """Get the Wi-Fi network information."""
        try:
            process = subprocess.check_output(["sudo", "iwconfig", "wlan0"])
            info = process.decode("utf-8")
            groups = re.search(r'ESSID:"(.+)"[\S\s.]+Link Quality=(\d+)', info)
            if groups:
                logger.debug(f"Network: {groups.group(1)} Quality: {groups.group(2)}")
                response = {"message": {"ssid": groups.group(1), "quality": groups.group(2)}}
            else:
                response = {"error": "getWifiInfo Error"}
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to get Wi-Fi info: {e}", exc_info=True)
            response = {"error": "getWifiInfo Error"}

        logger.debug(f"get_wifi_info: {response}")
        return json.dumps(response)

    def get_wifi_networks(self) -> str:
        """Get a list of available Wi-Fi networks."""
        try:
            ps = subprocess.Popen(["sudo", "iwlist", "wlan0", "scan"], stdout=subprocess.PIPE)
            process = subprocess.check_output(["grep", "ESSID:"], stdin=ps.stdout)
            ps.wait()
            networks = process.decode("utf-8")
            response = {"message": networks}
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to list Wi-Fi networks: {e}", exc_info=True)
            response = {"error": "Could not list networks"}

        logger.debug(f"get_wifi_networks: {response}")
        return json.dumps(response)

    def set_wifi_network(self, params: str) -> str:
        """Connect to a Wi-Fi network."""
        p = parse_react_json(params)
        if not p or "ssid" not in p or "password" not in p:
            return json.dumps({"error": "Error: No credentials provided"})

        ssid, password = p["ssid"], p["password"]
        try:
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/util/connect-wifi-network.sh", ssid, password],
                stderr=subprocess.STDOUT
            )
            response = {"message": process.decode("utf-8")}
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to connect to Wi-Fi network: {e}", exc_info=True)
            response = {"error": "Error: Invalid credentials"}

        logger.debug(f"set_wifi_network: {params} - {response}")
        return json.dumps(response)

    def check_wifi_connection(self) -> str:
        """Check if the device is connected to the internet."""
        try:
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/util/check-network-curl.sh"],
                stderr=subprocess.STDOUT
            )
            result = process.decode("utf-8").strip()
            if result != "true":
                response = {"error": result}
            else:
                response = {"message": result}
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to check Wi-Fi connection: {e}", exc_info=True)
            response = {"error": "Could not connect"}

        logger.debug(f"check_wifi_connection: {response}")
        return json.dumps(response)

    def log(self, text: str) -> str:
        """Log a message."""
        logger.info(f"[Cloud] {text}")
        response = {"message": "ok"}
        return json.dumps(response)

    def long_time(self, params: str) -> str:
        """Wait for a long time."""
        time.sleep(15)
        response = {"message": "ok"}
        return json.dumps(response)

    def remove_all_storage(self) -> str:
        """Remove all storage files."""
        try:
            os.system(f"find {TMP_DIR} -mindepth 1 -delete")
            response = {"message": "ok"}
        except OSError as e:
            logger.error(f"Failed to remove storage files: {e}", exc_info=True)
            response = {"error": "Failed to remove storage files"}

        return json.dumps(response)

    def toggle_fullscreen(self) -> None:
        """Toggle the fullscreen mode of the window."""
        webview.windows[0].toggle_fullscreen()

    def update(self) -> str:
        """Update the system."""
        try:
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/setup/update.sh"],
                stderr=subprocess.STDOUT
            )
            response = {"message": process.decode("utf-8")}
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to update: {e}", exc_info=True)
            response = {"error": "Could not update"}

        logger.debug(f"update: {response}")
        return json.dumps(response)

    def list_cron_jobs(self) -> str:
        """List all cron jobs."""
        result = cron.list()
        logger.debug(f"list_cron_jobs: {result}")
        return json.dumps(result)

    def add_cron_job(self, params: str) -> str:
        """Add a new cron job."""
        p = parse_react_json(params)
        if not p or "cron_job" not in p or "name" not in p:
            return json.dumps({"error": "Error: Invalid parameters"})

        logger.info(f"[App] Adding cron job: {p['name']} - {p['cron_job']}")
        result = cron.add(p["cron_job"], p["name"])
        return json.dumps(result)

    def delete_cron_job(self, params: str) -> str:
        """Delete a cron job."""
        p = parse_react_json(params)
        if not p or "name" not in p:
            return json.dumps({"error": "Error: Invalid parameters"})

        result = cron.delete(p["name"])
        logger.debug(f"delete_cron_job: {result}")
        return json.dumps(result)

    def update_cron_job(self, params: str) -> str:
        """Update an existing cron job."""
        p = parse_react_json(params)
        if not p or "old_name" not in p or "new_cron_job" not in p or "new_name" not in p:
            return json.dumps({"error": "Invalid parameters"})

        result = cron.update(p["old_name"], p["new_cron_job"], p["new_name"])
        logger.debug(f"update_cron_job: {result}")
        return json.dumps(result)

def main():
    """Main function to create and start the webview window."""
    api = Api()
    webview.create_window(
        "Smartcloud",
        url="/home/pi/firmware/out/index.html",
        js_api=api,
        width=480,
        height=320,
        frameless=True,
        fullscreen=True,
        on_top=True,
        resizable=False,
        text_select=False,
        min_size=(320, 240),
        background_color="#F00"
    )
    webview.start(debug=DEBUG, http_server=True)

if __name__ == "__main__":
    main()