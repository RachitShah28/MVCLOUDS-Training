import java.util.Scanner;

// "Create a function that accepts two arguments:the number of dice
// rolled, and the outcome of the roll. The function returns the number of
// possible combinations that could produce that outcome. The number of
// dice can vary from 1 to 6.
// Ex.
// User Input: 3 and 4.
// Output: 3
class Dice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the number for the dice rolled");
        int NumberOfDice = sc.nextInt();

        System.out.println("Enter the number for outcome of roll");
        int Outcome = sc.nextInt();

        System.out.println("You have entered " + NumberOfDice + "Dices");
        System.out.println("Outcome for it " + Outcome);



    }
}

//Pending