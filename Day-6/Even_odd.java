import java.util.ArrayList;
import java.util.List;

public class Even_odd {
    public static void main(String[] args) {

      List<Integer> list1 =new ArrayList<Integer>();  
      list1.add(2);
      list1.add(3);
      list1.add(4);      
      list1.add(5);      
      System.out.println(list1);

      for (int i = 0; i < list1.size(); i++) {
        if(list1.get(i) %2 == 0){
            System.out.println("Not");
            break;
        }
      }
        boolean a = true;
      int[] arr1 = {3,8,5,6,7};
      for (int i = 0; i < arr1.length; i++) {
        if(arr1[i] % 2 == 0){
            a = false;
            break;
        }
      }

      if(a){
        System.out.println("Above List is List of interger");
      }
      else{
        System.out.println("Above List is not List of interger");
      }

    }
}
