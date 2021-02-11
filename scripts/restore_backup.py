import os
import docker

client = docker.from_env()
container = client.containers.get("sklep-internetowy-hiretr_postgres_1")
os.chdir('../')
data = open('pg_backup.tar', 'rb').read()
container.put_archive('/', data)
container.exec_run(
    'pg_restore -d docker -U docker -c -F d /backup')
