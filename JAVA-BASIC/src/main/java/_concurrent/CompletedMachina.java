package _concurrent;

import java.io.IOException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletedMachina {
    public static void main(String[] args) {
        Machina m;
        CompletableFuture<Machina> cf = CompletableFuture.completedFuture(new Machina(0));
        try {
            m = cf.get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
        System.out.println(m);
    }
}
