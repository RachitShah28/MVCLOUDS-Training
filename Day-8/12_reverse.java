import java.util.Arrays;
import java.util.Scanner;

class Reverse2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter String");
        String str1 = sc.nextLine();
        // System.out.println(str1 );
        String[] parts = str1.split("\\s");
        // System.out.println(Arrays.toString(parts));
        String ans = "";
        for (int i = 0; i < parts.length; i++) {
            if(i == parts.length-1){
                ans = parts[i] +  ans;
            }
            else{
                ans = " " + parts[i] + ans;
            }
        }
        System.out.println(ans);
        sc.close();
    }
}
