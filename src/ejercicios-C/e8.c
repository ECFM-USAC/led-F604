#include <stdio.h>
int main(void) {
    int c, ultimo = 0;
    while ((c = getchar()) != EOF) {
        if (c != ' ' || ultimo != ' ') putchar(c);
        ultimo = c;
    }
    return 0;
}