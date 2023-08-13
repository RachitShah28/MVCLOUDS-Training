import java.util.Scanner;

class Protin{
    public static void main(String[] args){
        // System.out.println("Hello");

        // R-portion of red liquid
        // B-portion of blue liquid
        // G-portion of green liquid

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of test cases");
        int T = sc.nextInt();
        while(T>0){
            
            // R-portion of red liquid
            System.out.println("Enter number of portion for R");
            int R = sc.nextInt();

            // G-portion of green liquid
            System.out.println("Enter number of portion for G");
            int G = sc.nextInt();

            // B-portion of blue liquid
            System.out.println("Enter number of portion for B");
            int B = sc.nextInt();

            //M - at most magic tricks
            System.out.println("Enter number of Magic tricks");
            int M = sc.nextInt();

            // liquid amounts 

            int[] redAmout = new int[R];
            int[] greenAmount = new int[G];
            int[] blueAmount = new int[B];

            System.out.println("Enter liquids for R");
            for (int i = 0; i < R; i++) {
                redAmout[i] = sc.nextInt();
            }

            System.out.println("Enter liquids for G");
            for (int j = 0; j < G; j++) {
                greenAmount[j] = sc.nextInt();
            }

            System.out.println("Enter liquids for B");
            for (int k = 0; k < B; k++) {
                blueAmount[k] = sc.nextInt();
            }//Input over here,now output
            
            int MaxOfRed = Maximum(redAmout);
            int MaxOfGreen = Maximum(greenAmount);
            int MaxOfBlue = Maximum(blueAmount);

            // System.out.println(MaxOfRed + "--" + MaxOfGreen + "--" + MaxOfBlue);
            // Maximum2(blueAmount);

            //Maximum value from all of the colors
            int FinalMax = Math.max(MaxOfRed , Math.max(MaxOfGreen, MaxOfBlue));
            // System.out.println(FinalMax);
            for (int i = 0; i < M; i++) {
                if(FinalMax == MaxOfRed){
                    MaxOfRed = (MaxOfRed / 2);
                }
                else if(FinalMax == MaxOfGreen){
                    MaxOfGreen = (MaxOfGreen / 2);
                }
                else{
                    MaxOfBlue = (MaxOfBlue / 2);
                }   
            }
            int Finalans = Math.max(MaxOfRed, Math.max(MaxOfGreen, MaxOfBlue));
            System.out.println(Finalans);

            T--;
        }
        sc.close();
    } //Main method ending


    //For getting maximum value from array
    public static int Maximum(int[] arr) {
        int MaxValue = arr[0];

        for (int i = 0; i < arr.length; i++) {
            if(arr[i]> MaxValue){
                MaxValue = arr[i];
            }
        }
       return MaxValue;
    }


}