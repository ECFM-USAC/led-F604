#!/bin/bash
# Script para compilar el programa del curso a PDF

set -e  # Salir si hay error

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROFESOR_DIR="$REPO_ROOT/profesor"

echo "Compilando F604-S2024.tex a PDF..."
cd "$PROFESOR_DIR"

# Compilar LaTeX a PDF
pdflatex -interaction=nonstopmode F604-S2024.tex > /dev/null 2>&1

# Verificar que el PDF se generó
if [ ! -f "F604-S2024.pdf" ]; then
    echo "❌ Error: No se pudo generar F604-S2024.pdf"
    exit 1
fi

# Copiar PDF a la raíz del repositorio
cp F604-S2024.pdf "$REPO_ROOT/"
echo "✅ PDF copiado a: $REPO_ROOT/F604-S2024.pdf"

# Limpiar archivos intermedios generados por LaTeX
rm -f F604-S2024.aux F604-S2024.log F604-S2024.out F604-S2024.pdf

echo "✅ Compilación completada exitosamente"
