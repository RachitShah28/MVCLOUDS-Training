import java.util.Scanner;

public class reverse2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter number");
        String str1 = in.nextLine();
        // 123.45

        String[] parts = str1.split("\\.");

        String a = parts[0];
        String b = parts[1];
        // System.out.println(a);
        // System.out.println(b);

        String c = a;
     
        // System.out.println(c);
        char ch;
        String combine = "";
        for (int i=0; i<c.length(); i++)
        {
          ch= c.charAt(i); 
          combine= ch+combine;
        }
        //  System.out.println(combine);

         String d = b + combine;
         System.out.println(d);
         String ans = "";

         for (int i = 0; i < d.length(); i++) {
         ans += (i == a.length()) ? ( "." + d.charAt(i)) : ( d.charAt(i));
         }

         System.out.println(ans);


    }
}
