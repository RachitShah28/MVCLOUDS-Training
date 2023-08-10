import java.util.Arrays;
import java.util.Scanner;

class SecondBiggest {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter length of numbers");
        int n = sc.nextInt();
        int[] nums = new int[n];

        for (int i = 0; i < nums.length; i++) {
           nums[i] = sc.nextInt();
        }
        // System.out.println(Arrays.toString(nums));
        for (int i = 0; i < nums.length; i++) {
                // System.out.println(nums[i]);
                for (int j = i+1 ; j < nums.length; j++) {
                    if(nums[j] > nums[i]){
                        int temp = nums[i];
                        nums[i] = nums[j];
                        nums[j] = temp;
                    }
                }
        }
        System.out.println(nums[1]);
    }
}
