import java.util.Scanner;

 class pattern9 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number");
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    System.out.print("* ");
                }
                else{
                    System.out.print("  ");
                }
            }
            for(int j = 0; j <= 2*(n-i-1);j++){
                System.out.print("  ");
            }
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    System.out.print("* ");
                }
                else{
                    System.out.print("  ");
                }
            }
            System.out.println();
        }        
        for(int i = 0;i<1;i++){
            System.out.print("* ");
            for(int j = 0; j<n-1;j++){
                System.out.print("  ");
            }
            System.out.print("* ");
            for(int j = 0; j<n-1;j++){
                System.out.print("  ");
            }
            System.out.print("* ");
            System.out.println();
        }
        for (int i = n-1; i >= 0; i--) {
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    System.out.print("* ");
                }
                else{
                    System.out.print("  ");
                }
            }
            for(int j = 0; j <= 2*(n-i-1);j++){
                System.out.print("  ");
            }
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    System.out.print("* ");
                }
                else{
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}