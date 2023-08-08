import java.util.Scanner;

public class practice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter Number");
        int num1 = sc.nextInt();

        System.out.println(num1);
        System.out.println(reverse(num1));
        
    }

    static int reverse(int n)
    {
        int rev = 0;
        int rem;
  
        while (n > 0) {
            rem = n % 10;
            rev = (rev * 10) + rem;
            n = n / 10;
        }
  
        return rev;
    }
}
