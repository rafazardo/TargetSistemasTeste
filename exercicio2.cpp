#include <iostream>


int main(void) {
    long long int numAnterior = 1, numSucessor = 1, auxNumAnterior;
    int value;
    bool pertence = false;

    std::cin >> value;

    while (true) {
        if (numSucessor == value) {
            pertence = true; break;
        } else if (numSucessor > value) break;

        auxNumAnterior = numSucessor; // Armazena o sucessor, pois futuramente ele sera o antecessor
        numSucessor = numAnterior + numSucessor; // Gera o proximo termo da sequencia com a soma dos dois anteriores
        numAnterior = auxNumAnterior; // Garente que o anterior sera o antigo sucessor
    }

    if (pertence == true) std::cout << "Existe na sequencia!" << std::endl;
    else std::cout << "Nao existe na sequencia" << std::endl; 
}
