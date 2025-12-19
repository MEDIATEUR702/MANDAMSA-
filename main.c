#include <stdio.h>       
#include <stdlib.h>      
#include <math.h>        
#include "bibliotheque.h" 

int main(void) {
    int result = power(2, 3);
    printf("2³ == %d\n", result);

    result = fact(6);
    printf("6! == %d\n", result);

    int first= 5;
    int second = 10;
    printf("Avant permutation a=%d , b=%d\n", first, second);
    permutation(&first, &second);
    printf("Apres permutation a=%d , b=%d\n",first, second);

   
    int valeur = 29;
    if (est_premier(valeur)) {
        printf("%d est un nombre premier.\n", valeur);
    } else {
        printf("%d n'est pas un nombre premier.\n", valeur);
    }

float a = 2;
float b =2;
float c=0;
float x1=0;
float x2=0;


    resoudreEquation(a, b, c);
    return 0;

    Point A = {0.0f, 0.0f};
    Point B = {3.0f, 4.0f};

    float d = distance(A, B);

    printf("La distance entre A et B est : %.2f\n", d);

    return 0;

    return EXIT_SUCCESS;
}
