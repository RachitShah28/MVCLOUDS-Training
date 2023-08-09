
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Scanner;

public class codechef {
    public static void main(String[] args) throws java.lang.Exception {
        // your code goes here
        Scanner sc = new Scanner(System.in);
        // System.out.println("Enter number of test");
        int Q = sc.nextInt();

        while (Q > 0) {
            // System.out.println("Enter the total number of items");
            int N = sc.nextInt();

            // System.out.println("Enter items according to your length");
            ArrayList<Integer> M = new ArrayList<Integer>();

            for (int i = 0; i < N; i++) {
                // Dishes from M1 to Mn from user
                M.add(sc.nextInt());
            }

            // Number of Test cases
            int T = sc.nextInt();
            while (T > 0) {
                // int p = input[0];
                int p = sc.nextInt();
                // Maximum dishes aman wants to eat
                int k = sc.nextInt();

                // System.out.println(p);
                // System.out.println(k);

                ArrayList<Integer> list1 = new ArrayList<>();
                list1.clear();

                for (int i = 0; i < N; i++) {
                    if (M.get(i) % p == 0) {
                        list1.add(M.get(i));
                    }
                }
                Collections.sort(list1, Collections.reverseOrder());

                ArrayList<Integer> temp = new ArrayList<Integer>();

                // copy into temp
                for (int i = 0; i < M.size(); i++) {
                    temp.add(M.get(i));
                }

                for (int i = 0; i < N; i++) {
                    if (temp.get(i) % p == 0) {
                        temp.set(i, list1.get(0));
                        list1.remove(0);
                    }
                }

                int sum = 0;
                for (int i = 0; i < k; i++) {
                    sum = sum + temp.get(i);
                }
                System.out.println(sum);
                T--;
            }
            Q--;
        }
    }
}
