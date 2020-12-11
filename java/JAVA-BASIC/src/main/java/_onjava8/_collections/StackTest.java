package _onjava8._collections;

import java.util.ArrayDeque;
import java.util.Deque;

public class StackTest {
    public static void main(String[] args) {
        Deque<String> stack = new ArrayDeque<>();
        for (String s : " MY dog ".split(" ")) {
            stack.push(s);
        }
        while (!stack.isEmpty())
            System.out.println(stack.pop() + " ");
    }
}
