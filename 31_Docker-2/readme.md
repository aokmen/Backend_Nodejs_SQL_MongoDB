# Docker-2

## Server Systems

* Physical Servers (BareMetal Servers):
    * Bilgisayar -> Yüksek donanım, özel işlemciler, özel işletim sistemleri.
    * Kurulum: zor
    * VeriTaşıma: zor
    * Maliyet: yüksek
    * Dedicated Servers

* Virtual Servers (VMs: Virtual Machines):
    * Bir fiziksel makina içinde çok sanal makina.
    * Kurulum: orta (iso image)
    * VeriTaşıma: orta
    * Maliyet: orta
    * Bir makiaden diğer makinaya geçiş zorluğu.
    * Hypervisor yazılımları -> vmware.com
    * VPS (Virtual Private Server), VDS (Virtual Dedicated Server)

* Containers:
    * Bir fiziksel/sanal makina içinde çok konteyner.
    * Kurulum: kolay (docker image)
    * VeriTaşıma: kolay
    * Maliyet: düşük
    * Tüm konteynerları aynı ortamdan yönetebilme.
    * Microservice mimarisi.
    * Container yazılımları -> docker.com

## Temel Bilgiler

* IP ve Port:
  * Default portlar 80 443 -> https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
  * http -> 80 * http://clarusway.com == http://clarusway.com:80
  * https -> 443 * https://clarusway.com == https://clarusway.com:443 (need SSL)

---

# Docker

## Yüklemeler:

* Docker Desktop -> https://www.docker.com/products/docker-desktop/
    * Windows ve Macos için setup dosyası mevcut.
    * Linux sistemlere CLI üzerinden kurulum yapılabilir. -> https://docs.docker.com/desktop/install/linux-install/

* Docker Hub -> https://hub.docker.com

* VSCode Docker Extension -> https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker

## .dockerignore

```dockerignore

*.pyc
*.pyo
*.mo
*.db
*.css.map
*.egg-info
*.sql.gz
.cache
.project
.idea
.pydevproject
.idea/workspace.xml
.DS_Store
.git/
.sass-cache
.vagrant/
__pycache__
dist
docs
env/
logs
src/{{ project_name }}/settings/local.py
src/node_modules
web/media
web/static/CACHE
stats
Dockerfile
Footer
node_modules/
npm-debug.log

```

## DOCKERFILE
* https://docs.docker.com/engine/reference/builder/
* create file, named "dockerfile" (no extension)

backend/dockerfile:

```dockerfile
# FROM node
FROM node:20.9.0-alpine3.18

WORKDIR /backend

COPY . .

RUN mkdir -p logs
RUN mkdir -p upload
RUN npm install

CMD npm start
EXPOSE 8000

# --------------------------------
# $ cd /backend
# $ docker build -t backend .
# $ docker run -p 8000:8000 --name backend backend
# $ docker run -d -p 8000:8000 --name backend backend
# Browser: http://localhost:8000
```

frontend/dockerfile:

```dockerfile
# FROM node
FROM node:20.9.0-alpine3.18

WORKDIR /frontend

COPY . .

RUN npm install -g pnpm
RUN pnpm i

CMD npm start
EXPOSE 5173

# --------------------------------
# $ cd /frontend
# $ docker build -t frontend .
# $ docker run -p 5173:5173 --name frontend frontend
# $ docker run -d -p 5173:5173 --name frontend frontend
# Browser: http://localhost:5173
```


## Komutlar:
* https://docs.docker.com/get-started/docker_cheatsheet.pdf

```sh

    $ docker --version # Check version
    $ docker version # Check version with details 
    $ docker info # Check info
    $ docker help # Run help and see all commands
    $ docker <command> --help # Run help for any command.
    $ docker search <image_name> # Search

    # ! It can write image_id instead of image_name.
    # ! It can write container_id instead of container_name.

    # Build Files to Image:
    $ docker build -t <image_name> <folder_name> # Create images from dockerfile.
    $ docker build -t <user_name>/<image_name> .
    
    # Run Image to Container: (allways, image_name must be on the end):
    $ docker run -d -p <ext_port_number>:<int_port_number> <image_name> # run with external/internal port
    $ docker run -d --name <container_name> <image_name> # run and set container name
    $ docker run -d -p <ext_port_number>:<int_port_number> --name <container_name> <image_name>

    # IMAGES:
    $ docker images # List local images.
    $ docker rmi <image_name> # Delete image.

    # CONTAINERS:
    $ docker ps # List active containers.
    $ docker ps -a # docker ps --all # List all containers.
    $ docker start|stop <container_name> # Start/Stop container.
    $ docker rm <container_name> # Delete stopped container.

    # DOCKERHUB:
    $ docker login # Login auto (get user-info from docker-desktop)
    $ docker login -u <user_name> # Login manual
    $ docker tag <image_name> <user_name>/<image_name>[:tag] # Connect repo and set tag
    $ docker push <user_name>/<image_name>[:tag] # PUSH
    $ docker pull <image_name> # PULL
    $ docker search <image_name> # Search

    # Stop and delete passive containers/images/caches.
    $ docker system prune -a -f

```
---

# Docker Compose

* https://docs.docker.com/compose/compose-file/

/docker-compose.yml:

```yml
version: "3.9" # opsiyonel.

services:

    frontend:
        # container_name: frontend # (default:key)
        image: "docker-compose-frontend" # image_name
        build: ./frontend # Dockerize edilecek klasör (dockerfile)
        ports:
            # dış/iç port numaraları
            - 5173:5173
            - 3000:5173
            - 80:5173
        restart: on-failure # hata anında tekrar çalıştır.
        depends_on:
            # önce aşağıdakileri çalıştır.
            - backend # aşağıda tanımlandı.

    backend:
        # container_name: backend # (default:key)
        image: "docker-compose-backend" # image_name
        build: ./backend # Dockerize edilecek klasör (dockerfile)
        ports:
            # dış/iç port numaraları
            - 8000:8000
        restart: on-failure # hata anında tekrar çalıştır.
        volumes:
            # fiziksel yollar (external:internal)
            - $PWD/backend/logs:/backend/logs
            - $PWD/backend/upload:/backend/upload

# --------------------------------
# $ docker compose up # compose çalıştır.
# $ docker compose up -d --build # compose daemon aç ve tekrar build et.
# $ docker compose down # compose kapat.
# $ docker compose down -v # compose tümünü kapat.
```

---

### Bonus-1: MongoExpress (MongoDB Management)

```sh

    $ docker run -p 8081:8081 --rm -e ME_CONFIG_MONGODB_URL='mongodb://host.docker.internal:27017' mongo-express
    # open with browser -> http://admin:pass@127.0.0.1:8081 
    # username: admin - password: pass

```

### Bonus-2: SuperMario:

```sh

    $ docker run -p 8600:8080 bharathshetty4/supermario
    # open with browser -> http://localhost:8600

```