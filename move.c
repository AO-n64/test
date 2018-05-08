#include <stdio.h>
#include <stdlib.h>

#include <wiringPi.h>


int main(int argc, char *argv[]){

	if(wiringPiSetupGpio() == -1) return 1;

	printf("%d\n", atoi(argv[1]));

	pinMode( 15, OUTPUT);
	pinMode( 16, OUTPUT);

	digitalWrite(15, 0);
	digitalWrite(16, 1);

	if(atoi(argv[1])==0){
		printf("OFF");

		digitalWrite(15, 0);
		digitalWrite(16, 0);
	}

	if(atoi(argv[1])==1){
		printf("ON");

		digitalWrite(15, 0);
		digitalWrite(16, 1);
	}

	return 0;	
}