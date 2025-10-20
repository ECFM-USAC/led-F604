# VS Code en navegador + utilidades (imagen mantenida con s6-overlay)
FROM ghcr.io/linuxserver/code-server:latest

# Paquetes para C y utilidades de desarrollo
USER root
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential gcc gdb valgrind clang-format pkg-config git \
    && rm -rf /var/lib/apt/lists/*

# Carpeta de trabajo (la imagen usa /config como HOME)
WORKDIR /config/workspace

# Deja un saludo para primer arranque (opcional)
RUN mkdir -p /config/workspace

# La imagen ya expone 8443 y arranca code-server bajo s6-overlay.
# No es necesario CMD/ENTRYPOINT custom.
