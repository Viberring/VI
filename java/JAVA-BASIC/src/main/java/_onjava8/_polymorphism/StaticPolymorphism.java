package _onjava8._polymorphism;

import org.w3c.dom.ls.LSOutput;

class StaticSuper {
    public static String staticGet() {
        return "Base staticGet()";
    }
    public String dynamicGet() {
        return "Base dynamicGet()";
    }
}

class StaticSub extends StaticSuper {
    public static String staticGet() {
        return "Derived staticGet";
    }

    @Override
    public String dynamicGet() {
        return " Derived dynamicGet() ";
    }
}


public class StaticPolymorphism {

    public static void main(String[] args) {
        StaticSuper sup = new StaticSub(); // upcast
        System.out.println(StaticSuper.staticGet());
        System.out.println(sup.dynamicGet());
    }
}