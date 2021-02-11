import os
import docker

client = docker.from_env()
container = client.containers.get("sklep-internetowy-hiretr_postgres_1")
container.exec_run('pg_dump -U docker -d docker -F d -f backup')
os.chdir('../')
f = open('./pg_backup.tar', 'wb')
bits, stat = container.get_archive('/backup')
for chunk in bits:
    f.write(chunk)
f.close()
