import java.util.Scanner;
 class pattern2{
   public static void main (String[] args){
      int n,m;
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter number row");
      n=sc.nextInt();
      System.out.println("Enter number column");
      m=sc.nextInt();
      int row = n, col = m;
      for (int i = 0; i < row; i++) {
         for (int j = 0; j < col; j++){
            if (i < row / 2){
               if (j < col / 2){
                  if (j == 0)
                  System.out.print("*");
                  else
                  System.out.print(" "+ " ");
               }
               else if (j == col / 2)
                  System.out.print(" *");
               else{
                  if (i == 0)
                  System.out.print(" *");
               }
            }
            else if (i == row / 2)
               System.out.print("* ");
            else{
               if (j == col / 2 || j == col - 1)
                  System.out.print("* ");
               else if (i == row - 1){
                  if (j <= col / 2 || j == col - 1)
                     System.out.print("* ");
                  else
                  System.out.print(" "+ " ");
               }
               else
               System.out.print(" "+" ");
            }
         }
         System.out.print("\n");
      }
   };
}