#include <stdio.h>
#include <string.h>

void reverse(char s[]) {
    int i = 0, j = strlen(s) - 1;
    while (i < j) {
        char temp = s[i]; s[i] = s[j]; s[j] = temp;
        i++; j--;
    }
}

int main(void) {
    char linea[1000];
    
    while (fgets(linea, 1000, stdin) != NULL) {
        linea[strcspn(linea, "\n")] = '\0'; 
        reverse(linea);
        printf("%s\n", linea);
    }
    
    return 0;
}