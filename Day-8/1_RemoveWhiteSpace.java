import java.util.Scanner;

class RemoveWhiteSpace {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a string");
        String str1 = sc.nextLine();
        String ans = "";

        for (int i = 0; i < str1.length(); i++) {
            char a = str1.charAt(i);
            // System.out.println(a);

            if (a != ' ') {
                ans = ans + a;
            }
        }

        System.out.println(ans);
    }
}