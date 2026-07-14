# Laboratorio de Electrónica Digital

![Language](https://img.shields.io/badge/languages-C%20%7C%20VHDL%20%7C%20Verilog-blue)

---

## 📘 Descripción del Curso

**Nombre:** Laboratorio de Electrónica Digital  
**Código:** F604  
**Semestre:** Segundo, 2026  
**Profesor:** Erick Díaz

El curso **Laboratorio de Electrónica Digital** es un curso introductorio que se ocupa del diseño de circuitos electrónicos digitales. Los circuitos digitales se emplean en el diseño y construcción de sistemas como computadoras digitales, comunicación de datos, grabación digital, instrumentación física y muchas otras aplicaciones que requieren hardware digital.

A lo largo del curso, el estudiante desarrollará competencias en:
- Análisis de sistemas binarios y lógica digital
- Diseño de circuitos combinacionales y secuenciales
- Programación en lenguaje C
- Introducción al diseño con FPGA usando lenguajes HDL

Al finalizar el curso, el estudiante será capaz de:
- Diseñar e implementar circuitos digitales basados en especificaciones
- Programar microcontroladores en C
- Comprendre los conceptos fundamentales de FPGA y hardware reconfigurable

---

## 🧑‍💻 Metodología de Trabajo

El curso contará con un **repositorio oficial en GitHub**, donde los estudiantes podrán acceder a:
- Ejemplos de código y circuitos vistos en clase
- Tareas y ejercicios prácticos
- Prácticas de laboratorio y mini-proyectos
- Material de apoyo y recursos adicionales

El curso se desarrollará mediante clases teórico-prácticas combinadas con trabajo de laboratorio, orientadas al diseño y la implementación de sistemas digitales.

---

## 📂 Estructura del Repositorio

```text
.
├── profesor/               # Documentos del programa del curso
│   └── F604-S2024.tex      # Programa oficial del curso
├── ejemplos/               # Ejemplos organizados por tema
│   ├── sistemas_binarios/
│   ├── algebra_booleana/
│   ├── logica_combinacional/
│   ├── logica_secuencial/
│   ├── c/                  # Ejemplos en lenguaje C
│   └── fpga/               # Ejemplos VHDL/Verilog
├── tareas/                 # Tareas y ejercicios
├── practicas/              # Prácticas de laboratorio
├── recursos/               # Documentación y referencias
├── Dockerfile              # Configuración del contenedor
├── Makefile                # Comandos para build/run
├── .gitignore
└── README.md
```

---

## 🧬 Unidades del Curso

### 1. Sistemas Binarios (4 períodos)
Números binarios y decimales, Conversión decimal-binario, Números hexadecimales, Códigos binarios, Lógica binaria.

### 2. Álgebra Booleana y Compuertas Lógicas (12 períodos)
Definiciones básicas, Propiedades del álgebra booleana, Teoremas, Funciones booleanas, Formas canónicas, Mapas de Karnough.

### 3. Lógica Combinacional (8 períodos)
Procedimiento de diseño, Sumadores, Conversión de códigos, Multiplexores.

### 4. Lógica Secuencial (8 períodos)
Flip-Flops, Procedimiento de diseño, Sincronización, Contadores, Registros, Secuencias temporizadas.

### 5. Introducción a los Microprocesadores (4 períodos)
Componentes de un microprocesador, Tipos de microprocesadores, Lenguaje máquina, Sistemas operativos.

### 6. Programación en C (24 períodos)
Compilador, Tipos de variables, Estructuras condicionales y de bucle, Funciones, Manejo de memoria.

### 7. Introducción a FPGA (6 períodos)
Conceptos básicos de FPGA, Flujo de diseño, Hardware Description Language (HDL), Síntesis y programación, Aplicaciones.

---

## 🔧 Entorno de Desarrollo

El repositorio incluye un **Dockerfile** para un entorno consistente de desarrollo con:
- Compilador de C (gcc)
- Herramientas de simulación digital
- Herramientas FPGA (opcional)
- Visual Studio Code (web) via code-server

### Dependencias en la máquina local

- **Docker 20+**
  - Linux: docker y docker-compose (opcional)
  - Windows/Mac: Docker Desktop

- **make** (GNU Make) — para ejecutar los comandos del Makefile

- **Git** — para versionar el código

> Verifica: `docker --version` y `make --version`

---

## 🚀 Inicio Rápido

1. **Clona el repo:**
```bash
git clone <URL_DEL_REPO>.git
cd led-F604
```

2. **Construye la imagen:**
```bash
make docker-build
```

3. **Arranca el contenedor:**
```bash
make docker-run
```

4. **Abre tu navegador:**
   - Ve a `http://localhost:8080`
   - Ingresa la contraseña (por defecto: `changeme`)

**Para detener o eliminar:**
```bash
make docker-stop     # detener el contenedor
make docker-rm       # eliminar contenedor
make docker-sh       # shell interactivo dentro del contenedor
```

---

## ⚙️ Variables útiles (al ejecutar `make run`)

| Variable | Descripción | Valor por defecto |
|---|---|---|
| `PASSWORD` | Contraseña para acceder a VS Code | `changeme` |
| `HOST_PORT` | Puerto en el host | `8080` |
| `TZ` | Zona horaria | `America/Guatemala` |

**Ejemplo:**
```bash
PASSWORD=MiClaveSegura HOST_PORT=9000 make docker-run
```

---

## 📝 Evaluación del Curso

| Componente | Puntos |
|---|---|
| Exámenes parciales | 40 |
| Prácticas de laboratorio | 20 |
| Tareas | 15 |
| Evaluación final | 25 |
| **Total** | **100** |

---

## 📚 Bibliografía

- M. Morris Mano, *Diseño Digital*, Pearson, 2003, Tercera edición, México.
- P. J. Deitel, H. M. Deitel, *C++ Como Programar*, Pearson, 2008, Sexta Edición, México.

---

## 📞 Contacto

**Profesor:** Erick Díaz  
**Institución:** Escuela de Ciencias Físicas y Matemáticas (ECFM), USAC  
**Sitio web:** http://ecfm.usac.edu.gt/programas