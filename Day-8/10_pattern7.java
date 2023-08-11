import java.util.Scanner;

class patern7 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number");
        int row = sc.nextInt();

        for (int i = 0; i < row; i++) {

            for (int j = row - i; j > 1; j--) {
                // prints space between two stars
                System.out.print("  ");
            }

            // inner loop for columns
            for (int k = 0; k <= i; k++) {
                // prints star
                // for (int k = 0; k <j ; k++) {
                // System.out.print(j);
                // }
                if (k != 0) {
                    System.out.print(i);
                }

                System.out.print(" * ");
            }

            System.out.println();
        }
    }
}