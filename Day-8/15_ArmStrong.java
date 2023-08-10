import java.util.Scanner;

class ArmStrong {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number");
        int n = sc.nextInt();
        int temp = n;
        int reminder;
        int sum = 0;

        // System.out.println();
        String s = Integer.toString(n);
        int power = s.length();
        // System.out.println(power);

        // for (int i = 0; i < n; i++) {
        // temp = n % 10;
        // // sum = sum + Math.pow(temp, power);
        // temp = temp / 10;
        // }
        while (temp > 0) {
            reminder = temp % 10;
            sum = sum + (int)Math.pow(reminder, power); 
            temp = temp / 10;
        }

        System.out.println(sum);

        if(sum == n){
            System.out.println("Number is Armstong number");
        }
        else{
            System.out.println("Number is not Armstrong number");
        }
    }
}
