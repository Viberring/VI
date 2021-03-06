package _onjava8._concurrent;

import java.util.*;
import java.util.stream.*;
import java.util.function.*;
import java.io.*;


public class ParallelStreamPuzzle {

    static class IntGenerator implements Supplier<Integer> {
        private int current = 0;

        public Integer get() {
            return current++;
        }
    }

    public static void main(String[] args) throws IOException {
        for (int i = 0; i < 10; i++) {
            List<Integer> x =
                    Stream.generate(new IntGenerator())
                            .limit(10)
                            .parallel() //
                            .collect(Collectors.toList());
            System.out.println(x);
        }

    }

}
