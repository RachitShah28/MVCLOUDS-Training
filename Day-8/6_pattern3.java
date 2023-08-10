import java.util.Scanner;

class pattern3{
    public static void main(String[] args) {
        // System.out.println("Hii");
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of rows and colums");
        int rows = sc.nextInt();
        int cols = sc.nextInt();
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= cols; j++) {
                if(i==j && j>4){
                    System.out.print("*");
                }
                else{

                }
                
            }
        }
    }

}

//Pending   