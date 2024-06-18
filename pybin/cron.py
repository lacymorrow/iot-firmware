import subprocess
import json

DEBUG = True

def log(text):
    print("[Cron] %s" % text)

def list():
    try:
        process = subprocess.check_output(['crontab', '-l'], stderr=subprocess.STDOUT)
        response = {"message": process.decode("utf-8").strip()}
    except subprocess.CalledProcessError as e:
        response = {"error": "Could not list cron jobs", "details": str(e)}

    return response

def add(cron_job):
    try:
        process = subprocess.Popen(['crontab', '-l'], stdout=subprocess.PIPE)
        current_crons = process.communicate()[0].decode("utf-8")
        new_crons = current_crons + "\n" + cron_job + "\n"
        subprocess.run(['crontab', '-'], input=new_crons.encode("utf-8"), check=True)
        response = {"message": "Cron job added"}
    except subprocess.CalledProcessError as e:
        response = {"error": "Could not add cron job", "details": str(e)}

    return response

def delete(cron_job):
    try:
        log("Deleting cron job: " + cron_job)
        process = subprocess.Popen(['crontab', '-l'], stdout=subprocess.PIPE)
        current_crons = process.communicate()[0].decode("utf-8")
        log("Current crons: " + current_crons)
        new_crons = "\n".join([line for line in current_crons.split("\n") if line.strip() != cron_job])
        log("New crons: " + new_crons)
        subprocess.run(['crontab', '-'], input=new_crons.encode("utf-8"), check=True)
        response = {"message": "Cron job deleted"}
    except subprocess.CalledProcessError as e:
        response = {"error": "Could not delete cron job", "details": str(e)}

    return response

def update(old_cron_job, new_cron_job):
    try:
        process = subprocess.Popen(['crontab', '-l'], stdout=subprocess.PIPE)
        current_crons = process.communicate()[0].decode("utf-8")
        new_crons = "\n".join([new_cron_job if line.strip() == old_cron_job else line for line in current_crons.split("\n")])
        subprocess.run(['crontab', '-'], input=new_crons.encode("utf-8"), check=True)
        response = {"message": "Cron job updated"}
    except subprocess.CalledProcessError as e:
        response = {"error": "Could not update cron job", "details": str(e)}

    return response
