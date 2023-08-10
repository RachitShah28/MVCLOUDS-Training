 class pattern1 {
  public static void main(String[] args) {

    int size = 5;
    for (int i = 1; i <= size; i++) {
      for (int j = 0; j < i; j++) {
        // not last row
        if (i != size) {
          if (j == 0 || j == i - 1) {
            System.out.print("*");
          } else {
            System.out.print(" ");
          }
        }
        // last row
        else {
          System.out.print("*");
        }
      }
      System.out.println();
    }
  }
}