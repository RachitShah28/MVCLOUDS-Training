 class pattern6 {
    public static void main(String[] args) {
        int size = 9;
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                // System.out.println(j);
                if(i==j){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
