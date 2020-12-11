package _onjava8._typeinfo.pets;

import java.util.function.Function;

class One {}

class Two {}


public class ConsumeFunction {
    static Two consume(Function<One, Two> onetwo) {
        return onetwo.apply(new One());
    }

    public static void main(String[] args) {
        Two tow = consume(one -> new Two());
    }

}