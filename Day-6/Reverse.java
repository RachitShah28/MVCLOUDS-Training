import java.util.Scanner;

public class Reverse {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter number");
        String str1 = in.nextLine();
        // 123.45

        String[] parts = str1.split("\\.");

        String a = parts[0];
        String b = parts[1];
        System.out.println(a);
        System.out.println(b);

        String c = a+b;
     
        // System.out.println(c);
        char ch;
        String combine = "";
        for (int i=0; i<c.length(); i++)
        {
          ch= c.charAt(i); 
          combine= ch+combine;
        }
        String ans = "";
        String ans1 = "";
        String ans2 = "";
        System.out.println(combine);
        for (int i = 0; i < combine.length(); i++) {

            // ans += (i == a.length()) ? ( "." + combine.charAt(i)) : ( combine.charAt(i));
                
            if(i >= a.length()){
               ans2 = ans2 + combine.charAt(i);
            }
            else{
                ans1 = ans1 + combine.charAt(i);
            }

        //    (i>a.length()) ? ans2 = ans2 + combine.charAt(i) : ans1 = ans1 + combine.charAt(i);
        }
        System.out.println(ans);
        System.out.println(ans1);
        System.out.println(ans2);

        String ans3 = ans1 + "." + ans2;
        System.out.println(ans3);


    }
}
