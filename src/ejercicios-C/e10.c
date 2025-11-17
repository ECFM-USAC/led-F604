#include <stdio.h>

int main(void) {
    int c, len = 0;
    int contador[50] = {0};
    
    while ((c = getchar()) != EOF) {
        if (c == ' ' || c == '\n' || c == '\t') {
            if (len > 0) contador[len]++;
            len = 0;
        } else {
            len++;
        }
    }
    if (len > 0) contador[len]++;  
    

    for (int i = 1; i < 50; i++) {
        if (contador[i] > 0) {
            printf("%2d: ", i);
            for (int j = 0; j < contador[i]; j++) printf("#");
            printf("\n");
        }
    }
    
    return 0;
}