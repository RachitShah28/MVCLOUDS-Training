import java.util.*;

 class pattern3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        int a = sc.nextInt();

        for (int j = 0; j <= a; j++) {
            for (int i = 0; i <= a - j; i++) {
                System.out.print(" ");
            }
            for (int k = 0; k <= a; k++) {
                if (j == 0 || j == a || k == 0 || k == a) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
