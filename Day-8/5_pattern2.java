import java.util.Scanner;

class pattern2 {
   public static void main(String[] args) {
      int n;
      Scanner sc = new Scanner(System.in);
         
      System.out.println("Enter number for row and column");
      n = sc.nextInt();
      if(n%2==0){
            n= n+1;
         }
      if (n < 4) {
         System.out.println("Not possible");
      } 
      else
       {
         int row = n, col = n;
         for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
               if (i < row / 2) {
                  if (j < col / 2) {
                     if (j == 0)
                        System.out.print("*");
                     else
                        System.out.print(" " + " ");
                  } else if (j == col / 2)
                     System.out.print(" *");
                  else {
                     if (i == 0)
                        System.out.print(" *");
                  }
               } else if (i == row / 2)
                  System.out.print("* ");
               else {
                  if (j == col / 2 || j == col - 1)
                     System.out.print("* ");
                  else if (i == row - 1) {
                     if (j <= col / 2 || j == col - 1)
                        System.out.print("* ");
                     else
                        System.out.print(" " + " ");
                  } else
                     System.out.print(" " + " ");
               }
            }
            System.out.print("\n");
         }

      }

      sc.close();
   }
}