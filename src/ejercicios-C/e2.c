#include <stdio.h>

int main() {
    char name[30];
    
    printf("Ingrese un nombre\n");
    scanf("%99s", name);
    printf("Hola %s\n", name);
    
    return 0;
}
