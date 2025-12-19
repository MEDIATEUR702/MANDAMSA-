#ifndef __MY_MATH_LIB_H
#define __MY_MATH_LIB_H
#include <stdio.h>
#include <math.h>
// Définition d'une fonction de calcul de factorielle.
unsigned int fact( unsigned int value );
// Définition d'une fonction d'élévation à une puissance données.
int power( int value, unsigned int pow );
// Definition d'une fonction de permutation de deux nombres
int permutation( int *first,int *second );
// Definition d'une fonction de permettant de resoudre une equation du second degre
void resoudreEquation(float a, float b, float c);
// Definition d'une fonction de permettant de determiner si un nombre est premier
int estPremier(int n);

int est_premier(int n);


// Structure d'un point 
typedef struct
{
    float x;
    float y;
} Point;

// Prototype de la fonction 
float distance(Point p1, Point p2);


#endif

