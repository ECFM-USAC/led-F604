#include <stdio.h>

int main(void)
{
    int lower, upper, step;
    float fahr, celsius;
    lower = 0;
    upper = 100; 
    step = 10;    
    celsius = lower;

    printf("Tabla de conversión de Celsius a Fahrenheit\n");
    printf("======================================\n");
    
    while (celsius <= upper) {
        fahr = (celsius * 9.0/5.0) + 32.0;  
        printf("%4.0f %6.1f\n", celsius, fahr);
        celsius = celsius + step;
    }

    return 0;
}