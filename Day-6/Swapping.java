import java.util.Scanner;

public class Swapping {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter number 1");
        int num1 = in.nextInt();

        System.out.println("Enter number 2");
        int num2 = in.nextInt();

        System.out.println("Before Swapping number");
        System.out.println("Number-1 " + num1);
        System.out.println("Number-2 " + num2);
        
        int temp = num1;
        num1 = num2;
        num2 = temp;

        System.out.println("After swapping number");
        System.out.println("Number-1 " + num1);
        System.out.println("Number-2 " + num2);
    }
}
