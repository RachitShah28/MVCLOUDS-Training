
// formula for permutation is n! / (n-r)!

// formula for combination is n! / r!(n-r)!

import java.util.Scanner;

 class permutation_combi {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the first number");
        int num1 = sc.nextInt();
        System.out.println("Enter the second number");
        int num2 = sc.nextInt();

        // for n!
        int n = factorial(num1);
        // System.out.println(n);
        int r = factorial(num2);

        int calc = (num1 - num2);
        int calc2 = factorial(calc);

        int permutation = (n/(calc2));
        System.out.println("The permutaion is " + permutation);

        int combination = (n/(r*(calc2)));
        System.out.println("the combination is " + combination);

        sc.close();
    }

    public static int factorial(int n){
        int fact = 1;
        for (int i = 1; i <= n; i++) {
            fact = fact * i;
        }
        return fact;
    }
}
