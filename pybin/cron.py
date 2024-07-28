import subprocess
import json

DEBUG = True

def log(text):
    print("[Cron] %s" % text)

def list():
    try:
        process = subprocess.check_output(['crontab', '-l'], stderr=subprocess.STDOUT)
        cron_jobs = process.decode("utf-8").strip().split('\n')
        named_jobs = {}
        for i in range(0, len(cron_jobs), 2):
            if i+1 < len(cron_jobs):
                name = cron_jobs[i].strip('# NAME: ')
                job = cron_jobs[i+1]
                named_jobs[name] = job
        response = {"message": named_jobs}
    except subprocess.CalledProcessError as e:
        response = {"error": "Could not list cron jobs", "details": str(e)}

    return response

def add(cron_job, name):
    try:
        process = subprocess.Popen(['crontab', '-l'], stdout=subprocess.PIPE)
        current_crons = process.communicate()[0].decode("utf-8")
        new_crons = current_crons + f"\n# NAME: {name}\n{cron_job}\n"
        subprocess.run(['crontab', '-'], input=new_crons.encode("utf-8"), check=True)
        response = {"message": f"Cron job '{name}' added"}
    except subprocess.CalledProcessError as e:
        response = {"error": "Could not add cron job", "details": str(e)}

    return response

def delete(name):
    try:
        process = subprocess.Popen(['crontab', '-l'], stdout=subprocess.PIPE)
        current_crons = process.communicate()[0].decode("utf-8")
        cron_lines = current_crons.split('\n')
        new_crons = []
        i = 0
        while i < len(cron_lines):
            if cron_lines[i].strip() == f"# NAME: {name}":
                i += 2  # Skip the next line (the actual cron job)
            else:
                new_crons.append(cron_lines[i])
            i += 1
        new_crons = "\n".join(new_crons)
        subprocess.run(['crontab', '-'], input=new_crons.encode("utf-8"), check=True)
        response = {"message": f"Cron job '{name}' deleted"}
    except subprocess.CalledProcessError as e:
        response = {"error": "Could not delete cron job", "details": str(e)}

    return response

def update(old_name, new_cron_job, new_name):
    try:
        delete_result = delete(old_name)
        if "error" in delete_result:
            return delete_result
        add_result = add(new_cron_job, new_name)
        response = {"message": f"Cron job '{old_name}' updated to '{new_name}'"}
    except Exception as e:
        response = {"error": "Could not update cron job", "details": str(e)}

    return response