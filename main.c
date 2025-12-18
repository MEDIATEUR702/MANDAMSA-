#include <stdio.h>
#include <stdlib.h>
#include "bibliotheque.h"
int main( void ) {
 int result = power( 2, 3 );
 printf( "2³ == %d\n", result );
 result = fact( 6 );
 printf( "6! == %d\n", result );
 int a=5;
 int b=10;
  printf("Avant permutation a=%d , b=%d\n" ,a , b );
 permutation( &a, &b );
 printf("Apres permutation a=%d , b=%d" ,a , b );

 return EXIT_SUCCESS;
}