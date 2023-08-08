import java.util.Scanner;

public class findword {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter String");
        String str1 = in.nextLine();

         System.out.println("Enter index");
         int num = in.nextInt();

        String[] strArray = null; 
        strArray = str1.split(" "); 
        for (int i = 0; i < strArray.length; i++){  
            if((num-1) == i){
                System.out.println(strArray[i]);
            }  
            }  
    }
}
