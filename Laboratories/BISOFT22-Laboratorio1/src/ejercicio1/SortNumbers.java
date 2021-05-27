package ejercicio1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class SortNumbers {
    static BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

    public static void main(String[] args) {
        System.out.println("Enter chain of characters to sort, e.g. 1 4 2 6 3");
        int[] numbersSorted = readAndSortNumbers();
        System.out.print(IntStream.of(numbersSorted).mapToObj(Integer::toString).collect(Collectors.joining(" ")));
    }

    public static int[] readAndSortNumbers() {
        int[] nums = null;
        try {
            nums = Arrays.stream(bf.readLine().split(" ")).mapToInt(Integer::parseInt).sorted().toArray();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return nums;
    }
}
