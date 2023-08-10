import java.util.Scanner;

class Sorting {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter String");
        String d = sc.nextLine();
        char[] CharArray = d.toCharArray();

        
        // for (int i = 0; i < CharArray.length; i++) {
        //     System.out.println(CharArray);
        // }
      

        for (int i = 0; i < CharArray.length ; i++) {
            for (int j = i+1; j < CharArray.length; j++) {
                if(CharArray[j] < CharArray[i]){
                    char temp = CharArray[i];
                    CharArray[i] = CharArray[j];
                    CharArray[j] = temp;
                }
            }
        }

        System.out.println(CharArray);
    }
}
