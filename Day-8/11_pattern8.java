import java.util.*;
 class pattern11 {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number");
        int n = sc.nextInt();
        for(int i = 0; i < n ;i++){
            for(int j = (2*n)-1-i; j > 0; j--){
                System.out.print(" ");
            }
            for(int j = 0; j < (i*2)+1; j++){
                if(j%2==0){
                    System.out.print("*");
                }
                else{
                System.out.print(i);
                }
            }
            System.out.println();
        }
        for(int i = n-2; i >= 0 ;i--){
            for(int j = (2*n)-1-i; j > 0; j--){
                System.out.print(" ");
            }
            for(int j = 0; j < (i*2)+1; j++){
                if(j%2==0){
                    System.out.print("*");
                }
                else{
                System.out.print(i);
                }
            }
            System.out.println();
        }
        sc.close();
    }
}