#include <stdio.h>

int main(void) {
    int c, last;
    last = -1; 
    
    while ((c = getchar()) != EOF) {
        if (c == ' ' || c == '\t') {

            if (last != -1) last++;
        } 
        else if (c == '\n') {
            if (last != -1) {
                putchar('\n');
            }
            last = -1; 
        } 
        else {
   
            if (last != -1) {
                for (int i = 0; i < last; i++) putchar(' ');
                last = -1;
            }
            putchar(c);
        }
    }
    
    return 0;
}