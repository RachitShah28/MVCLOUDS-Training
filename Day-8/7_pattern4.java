import java.util.Scanner;

class pattern4 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter N : ");
        int n = sc.nextInt();

        int k = n * 2 - 1;

        for (int i = 1; i <= k; i++) {
            if (i == 1 || i == n || i == k)

                for (int j = 1; j <= n; j++)

                {
                    if (j == 1 || j == n)
                        System.out.print(" ");
                    else
                        System.out.print("*");

                }
            else
                for (int j = 1; j <= n; j++)

                {
                    if (j == 1 || j == n)
                        System.out.print("*");
                    else
                        System.out.print(" ");

                }

            System.out.println();

        }
    }
}