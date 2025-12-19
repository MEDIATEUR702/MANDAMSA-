#include "bibliotheque.h"
#include <math.h>
#include <stdio.h>   // pour printf

// Définition d'une fonction de calcul de factorielle.
unsigned int fact(unsigned int value) {
    unsigned int result = 1;
    while (value > 1) {
        result *= value;
        value--;
    }
    return result;
}

// Définition d'une fonction d'élévation à une puissance donnée.
int power(int value, unsigned int pow) {
    if (pow == 0) return 1;
    if (pow == 1) return value;
    int accumulator = 1;
    while (pow > 0) {
        accumulator *= value;
        pow--;
    }
    return accumulator;
}

// Fonction de permutation
int permutation(int *first, int *second) {
    int c = *first;
    *first = *second;
    *second = c;
}

// Résolution d'une équation du second degré
void resoudreEquation(float a, float b, float c) {
    float delta, x1, x2;

    if (a == 0) {
        printf("Ce n'est pas une equation du second degre.\n");
    } else {
        delta = b*b - 4*a*c;

        if (delta > 0) {
            x1 = (-b + sqrt(delta)) / (2*a);
            x2 = (-b - sqrt(delta)) / (2*a);
            printf("Deux solutions reelles : x1 = %.2f et x2 = %.2f\n", x1, x2);
        } else if (delta == 0) {
            x1 = -b / (2*a);
            printf("Une solution reelle double : x = %.2f\n", x1);
        } else {
            printf("Pas de solution reelle.\n");
        }
    }
}





// Vérifier si un nombre est premier
int est_premier(int n) {
    if (n <= 1) return 0;       
    if (n == 2) return 1;       
    if (n % 2 == 0) return 0;   

    int i;
    for (i = 3; i <= sqrt(n); i += 2) {  
        if (n % i == 0) return 0;        
    }
    return 1;  
}

// Calcul de la distance entre deux points
float distance(Point p1, Point p2) {
    float dx = p2.x - p1.x;
    float dy = p2.y - p1.y;
    return sqrt(dx*dx + dy*dy);
}
