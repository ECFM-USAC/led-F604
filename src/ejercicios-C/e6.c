 #include <stdio.h>

int main(void) {
    char linea[1000];
    int c, i = 0;
    
    while ((c = getchar()) != EOF) {
        if (c == '\n') {
            if (i > 80) {
                linea[i] = '\0';
                printf("%s\n", linea);
            }
            i = 0;
        } else {
            if (i < 999) {
                linea[i] = c;
                i++;
            }
        }
    }
    
    return 0;
}