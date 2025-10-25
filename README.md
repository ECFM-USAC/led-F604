# Programación en C - Laboratorio de electrónica digital

Repositorio base para la parte de Programación en lenguaje C del curso “Laboratorio de electrónica digital”.
Desarrolla en Visual Studio Code (web) dentro de un contenedor Docker, mientras tu código permanece local para versionarlo con Git.

### Estructura del repositorio
```
.
├─ Dockerfile
├─ Makefile                # build/run/stop del contenedor
├─ .gitignore
├─ .code_config/           # (se crea al correr) configuración persistente de code-server
└─ src/
   └─ main.c               # ejemplo mínimo en C

```


### Dependencias en la máquina local

- Docker 20+

    - Linux: docker y docker-compose (opcional) 

    - Windows/Mac: Docker Desktop

- make (GNU Make) — para ejecutar los comandos del Makefile

- Git — para versionar el código

> Verifica Docker: docker --version — Verifica Make: make --version


## Inicio rápido

1. Clona el repo y entra en la carpeta:
```
git clone <URL_DEL_REPO>.git
cd <CARPETA_DEL_REPO>
```

2. Construye la image:
```
make docker-build
```

3. Arranca el contenedor (code-server + toolchain C)::
```
make docker-run
```

4. Abre tu navegador en http://localhost:8080

- Ingresa la contraseña (por defecto changeme o la que definas)

> Para detener o eliminar:
```
make docker-stop     # detener
make docker-rm       # eliminar contenedor
make docker-sh       # shell dentro del contenedor
```
---

### Variables útiles (al ejecutar make run)

- PASSWORD — contraseña de acceso a VS Code (web).

- HOST_PORT — puerto en el host (por defecto 8080).

- TZ — zona horaria (por defecto America/Guatemala).

Ejemplo:
```
PASSWORD=MiClaveSegura HOST_PORT=9000 make run

```

---

### Notas de permisos y persistencia

La configuración de VS Code (extensiones, settings) se guardan en `./.code_config` (mapeado a `/config`).

El código del repo se monta en `/config/workspace` → tus archivos siguen locales, listos para Git.