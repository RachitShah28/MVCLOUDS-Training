 class patern7 {
    public static void main(String args[]) {

        int i, j, row = 5;

        for (i = 0; i < row; i++) {

            for (j = row - i; j > 1; j--) {
                // prints space between two stars
                System.out.print(" ");
            }
            
            // inner loop for columns
            for (j = 0; j <= i; j++) {
                // prints star
                // for (int k = 0; k <j ; k++) {
                //     System.out.print(j);
                // }
                if(j!=0){
                    System.out.print(i);
                }
                
                System.out.print(" * ");
            }
            
            System.out.println();
        }
    }
}