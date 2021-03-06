import java.util.*;
import java.util.concurrent.Future;
import java.io.*;
import java.lang.annotation.Annotation;
import java.lang.annotation.Documented;

public class Types {

    // generic type and parameterized type ???
    static class T<E> {
        E e;
        public T(E e) {
            System.out.println(">>>>>>>>>>>>>>>>>>>>>>>");
            System.out.println(e);            
            System.out.println(">>>>>>>>>>>>>>>>>>>>>>>");            
        }
        // private T<String> t = new T<>();
    }
    // define generic types
    static class Pair<X, Y> {
        private X first;
        private Y second;
        public Pair(X a1, Y a2) {
            first = a1;
            second = a2;
        }
        public X getFirst() { return first; }
        public void setFirst(X arg) { first = arg; }
        public Y getSecond() { return second; }
        public void setSecond(Y arg) { second = arg; }
        public String toString() {
            return "<Pair" + "(" + first + ", " + second + ")" + ">";
        }

        public void printPair(Pair<String, Long> pair) {
            System.out.println("(" + pair.getFirst() + ", " + pair.getSecond() + ")");
        }
        // public void printPair(Pair<?, ?> pair) {
        //     System.out.println("(" + pair.getFirst() +","+pair.getSecond()+")");
        // }
    }
    // anonymous inner class with generics
    public static T t() {
        new T<String>("A") {};
        new T<Integer>(1) {};
        return new T<Pair<String, String>>(new Pair<String, String>("a", "b")){
            public void h() {}
        };
    }
    // type erasure
    public static void type_erasure() {
        System.out.println(" runtime type of ArrayList<String>: " + new ArrayList<String>().getClass());
        System.out.println(" runtime type of ArrayList<Integer>: " + new ArrayList<Integer>().getClass());
    }
    // cast to a parameterized type
    public static void cast_to_parameterized_type() {
        System.out.println(" !!runtime detection::::: ");
        // downcast
        // cast happends to raw type
        //List<String> b = (List<String>) new Object();  // runtime check, which maybe raise a ClassCastException unanticipated !!
        System.out.println("==================================");
        System.out.println(" !!compile detection::::: ");
        // List<String> a = (List<String>) new ArrayList<Integer>();  // compile detection
        // upcast will not lead to an "unchecked" warning.
        List a = (List<String>) new ArrayList<String>() {{add("A--A");}};
        List b = (List<Object>) new ArrayList<Object>();
        System.out.println(a.getClass().getSimpleName());        
        System.out.println("==> " + a.get(0));
        System.out.println("==> " + a.get(0).getClass());        
        System.out.println("==================================");
    }
    // exceptin handle
    // static class X<T> extends Exception {} // generic class may not extend java.lang.Throwable

    // generic static member

    // List<Object> && List<String>
    public static void printAll(ArrayList<Object> c) {
        for (Object o : c) {
            System.out.println(o);
        }
    }
    public static void printAll(Collection<Object> c) {
        for (Object o : c) {
            System.out.println(o);
        }
    }
    public static void supertype_relation() {
        ArrayList<String> list = new ArrayList<String>();
        //printAll(list);  // error: no suitable method found  for printAll(ArrayList<String>)
        List<Object> list0 = new ArrayList<Object>();
        list0.add("QQQ");
        printAll(list0); // fine
    }
    // array of generic
    public static void generics_array() {
        // Pair<Integer, Integer>[] intPairArr = new Pair<Integer, Integer>[10]; // error: generic array creation
        Pair<Integer, Integer>[] intPairArr = new Pair[10];
        Object[] objArr = intPairArr;
        objArr[0] = new Pair<String, String>("", ""); // should fail, but would succeed
        Integer i = intPairArr[0].getFirst(); // fails at runtime with ClassCashException
    }
    
    //// workaround
    public static void generic_workaround() {
        // Pair<Integer, Integer>[] intPairArr = new Pair<Integer, Integer>[10]; // error
        // Pair<Integer, Integer>[] intPairArr = new Pair[10];
        // Pair[] intPairArr = new Pair[10];
        Pair<?,?>[] intPairArr = new Pair<?,?>[10];
        addElements(intPairArr);
        // Pair<Integer, Integer> pair = intPairArr[1]; // error: incompatible types
        //Integer i = pair.getFirst();
        //pair.setSecond(i);
    }
    public static void addElements(Object[] objArr) {
        objArr[0] = new Pair<Integer, Integer>(0, 0);
        objArr[1] = new Pair<String, String>("", ""); // should fail with ArrayStoreException
    }
    //
    // raw type
    Collection c = new ArrayList();
    public static class SomeLegacyClass {
        private List c;
        public void setNames(List c) {this.c = c;}
        public List getNames() {return c;}
    }
    public static void raw_types() {
        SomeLegacyClass obj = new SomeLegacyClass();
        List<String> names = new LinkedList<>();
        obj.setNames(names);
        names = obj.getNames();  // [warning] unchecked conversion
    }
    
    interface Copyable<T> {
        T copy();
    }

    final static class Wrapped<Elem extends Copyable<Elem>> {
        private Elem theObject;
        public Wrapped(Elem arg) { theObject = arg.copy(); }
        public void setObject(Elem arg) { theObject = arg.copy(); }
        public Elem getObject() { return theObject.copy(); }
        public boolean equals(Object other) {
            if (other == null) return false;
            if (! (other instanceof Wrapped)) return false;
            return (this.theObject.equals(((Wrapped)other).theObject));
        }
    }

    static class MyString implements Copyable<MyString> {
        private StringBuilder buffer;
        public MyString(String s) { buffer = new StringBuilder(s); }
        public MyString copy() {
            return new MyString(buffer.toString());
        }
        public String toString() {
            return buffer.toString();
        }
    }

    private static void test_raw(Wrapped raw_wrapper) {
        raw_wrapper.setObject(new MyString("Deutsche Bank"));   // unchecked warning
        Object s = raw_wrapper.getObject();
        System.out.println("raw wrapper:  " + s);
    }
    private static void generic_wrapper() {
        Wrapped<MyString> generic_wrapper = new Wrapped<>(new MyString("Citibank"));
        MyString ss = generic_wrapper.getObject();
        System.out.println("generic wrapper:  " + ss);
        test_raw(generic_wrapper);
    }

    // wildcard
    public static void wildcard_test() {
        Collection<?> coll = new ArrayList<>();
        // List<? extends Number> list = new ArrayList<String>(); // error
        ArrayList<?> anyList = new ArrayList<Long>();
        ArrayList<String> stringList = new ArrayList<String>();
        anyList = stringList;
        // stringList = anyList;  // incompatible types: ArrayList<CAP#1> cannot be converted to ArrayList<String>
    }
    public static class Box<T> {
        private T t;
        public Box(T t) { this.t = t; }
        public void put(T t) { this.t = t;}
        public T take() { return t; }
        public boolean equalTo(Box<T> other) { return this.t.equals(other.t); }
        public Box<T> copy() { return new Box<T>(t); }
    }
    public static void access_test() {
        Box<?> box = new Box<String>("abc");
        // box.put("xyz");  // error
        box.put(null);
        // String s = box.take(); // error
        Object o = box.take();
        // boolean equal = box.equalTo(box); // error
        // equal = box.equalTo(new Box<String>("abc")); // error
        Box<?> box1 = box.copy(); // ok
        // Box<String> box2 = box.copy(); // error
    }
    interface Comparable<T> {
        int compareTo(T arg);
    }
    
    ///////////////

    // generic method
    public static class S {
        public <E> S(E e) {
            System.out.println(e);
        }
    }
    ///////////////
    // type parameter

    ////
    public static class X0<T extends Integer> {} // error

    ////////////////
    // Enum<E extends Enum<E>>
    public static abstract class Enum<E extends Enum<E>> implements Comparable<E>, Serializable {
        public int compareTo(E e) {
            return 0;
        }
    }

    public static class Timo extends Enum<Timo> {
        
    }

    enum Color { RED, BLUD, GREEN }

    // Example (before type erasure):
    // class Sequence<T> {
    //     public T[] asArray(int size) {
    //         T[] array = new T[size]; // error: generic array creation
    //         return array;
    //     }
    // }
    // Example (after a conceivable translation by type erasure):
    class Sequnce {
        public Object[] asArray(int size) {
            Object[] array = new Object[size];
            return array;
        }
    }

    ////////////////////////////
    // Scope 
    public static class SomeClass<T> {
        // static initializer, static field, static method
        static {
            // SomeClass<T> test = new SomeClass<T>(); // T can not be referenced from a static context
            System.out.println("==== staic =======");
        }
        // private static T globalInfo; // error
        // public static T getGlobalInfo() {
        //     return globalInfo;  // error
        // }
        public SomeClass() {
            System.out.println(">>>>>>>. constructor <<<<<<<<<<");
        }

        // non-static initializer, non-static field, non-static method
            {
                System.out.println("@@@@@ instance @@@@");
                // SomeClass<T> test = new SomeClass<T>();
            }
        private T localInfo;
        public T getLocalInfo() { return localInfo; }
        // static nested types
        // public static class Failure extends Exception {
        //     private final T info;                  // error
        //     public Failure(T t) { info = t; }      // error
        //     public T getInfo() { return info; }    // error
        // }
        // private interface Copyable0 {
        //     T copy();  // error
        // }
        // private enum State {
        //     VALID, INVALID;
        //     private T info; // error
        //     public void setInfo(T t) { info = t; }// error
        //     public T getInfo() { return info; } // error
        // }
        // non-static nested types
        public class Accessor {
            public T getInfo() { return localInfo; }
        }
        // non-static method
        <T extends Copyable<T>> void nonStaticMethod(T t) {
            final T copy = t.copy();
            class Task implements Runnable {
                public void run() {
                     T tmp = copy; System.out.println(tmp);
                }       
            }
            (new Task()).run();
        }
        // // static method
        static <T extends Copyable<T>> void staticMethod(T t) {
            final T copy = t.copy();
            class Task implements Runnable {
                public void run() {
                    T tmp = copy;
                    System.out.println(tmp);
                }
            }
            (new Task()).run();
        }
    }

    public final class Wrapper<T> {
        public final T theObject;
        public Wrapper(T t) { theObject = t; } public T getWrapper() { return theObject; }
        private final class WrapperComparator<W extends Wrapper<? extends Comparable<T>>>
            implements Comparator<W> {
            public int compare(W lhs, W rhs) {
                return lhs.theObject.compareTo((T)(rhs.theObject)); }
        }
        public <V extends Wrapper<? extends Comparable<T>>> Comparator<V> comparator() {
            return this.new WrapperComparator<V>();
        }
    }


    /// wildcard
    class Boxx<T extends Comparable<T> & Cloneable>
        implements Comparable<Boxx<T>>, Cloneable {
        private T theObject;
        public Boxx(T arg) {
            theObject = arg;
        }

        public Boxx(Boxx<? extends T> box) {
            theObject = box.theObject;
        }
        public int compareTo(Boxx<T> other) {
            return 0;
        }
        public Boxx<T> clone() {
            return null;
        }
    }

    
    ///////////////////////////
    // Generic types

    // poor style
    List<String> list = new ArrayList<>();
    // Iterator iter = list.iterator();
    Iterator<String> iter = list.iterator();    
    // String s = (String) iter.next;
    String s = iter.next();

    // getClass workaround
    public void f(Object obj) {
        Class type = obj.getClass(); // unchecked warning
        Class<?> type0 = obj.getClass();
        Annotation a = type.getAnnotation(Documented.class);
    }

    static class Legacy {
        public static List create() {
            List rawList = new ArrayList();
            rawList.add("abc"); // unchecked warning
            return rawList;
        }
        public static void insert(List rawList) {
            rawList.add(new Date()); // unchecked warning
        }
    }

    static class Modern {
        private void someMethod() {
            List<String> stringList = Legacy.create();
            List<String> stringList0 = Collections.checkedList(Legacy.create(), String.class);
            Legacy.insert(stringList);
            Legacy.insert(stringList0);
            Unrelated.useStringList(stringList);
            Unrelated.useStringList(stringList0);
        }
    }
    static class Unrelated {
        public static void useStringList(List<String> stringList) {
            String s = stringList.get(1); // ClassCastException
        }
    }
    /////////////////////////////


    static class Legacy0 {
        public static List legacyCreate() {
            List rawList = new ArrayList();
            rawList.add(new Pair<>("abc", "xyz"));
            return rawList;
        }
        public static void legacyInsert(List rawList) {
            rawList.add(new Pair(new Date(), "Xmas"));
        }
    }
    static class Modern0 {
        private void someModernMethod() {
            List<Pair<String, String>> stringPairs =
                    Collections.checkedList(Legacy0.legacyCreate(), Pair.class);
            Legacy0.legacyInsert(stringPairs);
            Unrelated0.useStringList(stringPairs);
        }
    }
    static class Unrelated0 {
        public static void useStringList(List<Pair<String, String>> stringList) {
            String s = stringList.get(1).getFirst(); // ClassCastException
        }
    }

    public static void CollectionCompare() {
        Collection<Pair<String, Object>> c = new ArrayList<>();
        // c.add(new Pair<String, Date>("today", new Date()));
        c.add(new Pair<String, Object>("today", new Date()));
        Collection<Pair<String, ?>> cc = new ArrayList<>();
        cc.add(new Pair<String, Date>("to", new Date()));
    }

    
 
    ///////////////////////////////////////////////////
    // generic method

    static void overloadedMethod(Object o) {
        System.out.println("overloadedMethod(Object) called");
    }
    static void overloadedMethod(String s) {
        System.out.println("overloadedMethod(String) called");
    }
    static void overloadedMethod(Integer i) {
        System.out.println("overloadedMethod(Integer) called");
    }
    static <T> void genericMethod(T t) {
        overloadedMethod(t); // which method is called ?
    }

    public final static class GenericClass<T> {
        private void overloadedMethod(Collection<?> o) {
            System.out.println("===> overloadedMethod(Collection<?>)");
        }
        private void overloadedMethod(List<Number> s) {
            System.out.println("===> overloadedMethod(List<Number>)");
        }
        private void overloadedMethod(ArrayList<Integer> i) {
            System.out.println("===> overloadedMethod(ArrayList<Integer>)");
        }
        private void method(List<T> t) {
            overloadedMethod(t); // which method is called?
        }
        private void method0(List<Integer> t) {
            overloadedMethod(t);
        }
    }

    /////////////////////////////////
    //// copy with legacy


    ///
    static class Animal {}
    static class Fish extends Animal {}
    static class TypeArgument {}
    abstract class Habitat {
        protected Collection theAnimals;
        public void addInhabitant(Animal animal) {
            theAnimals.add(animal);
        }
    }

    class Aquarium extends Habitat {
        public void addInhabitant(Animal fish) {
            if (fish instanceof Fish) {
                theAnimals.add(fish);
            } else
                throw new IllegalArgumentException(fish.toString());
        }
    }



    // defining generic types and 
    interface Contained {}
    interface Container<T extends Contained> {
        void add(T element);
        List<T> elements();
        Class<T> getElementType();
    }
    class MyContained implements Contained {
        private final String name;

        public MyContained(String name) {
            this.name = name;
        }
        public @Override String toString() {
            return name;
        }
    }
    class MyContainer implements Container<MyContained> {
        private final List<MyContained> _elements = new ArrayList<>();

        public void add(MyContained element) {
            _elements.add(element);
        }

        public List<MyContained> elements() {
            return _elements;
        }
        public Class<MyContained> getElementType() {
            return MyContained.class;
        }
    }
    static class  MetaContainer {
        private Container<? extends Contained> container;
        public void setContainer(Container<? extends Contained> container) {
            this.container = container;
        }
        public void add(Contained element) {
            // container.add(element); // error
            // container.add(container.getElementType().cast(element)); // error
            _add(container, element);
        }
        private static <T extends Contained> void _add(Container<T> container, Contained element) {
            container.add(container.getElementType().cast(element));
        }
        public List<? extends Contained> elements() {
            return container.elements();
        }
    }

    interface GenericType<T> {
        void method(T arg);

        Class<T> getTypeArgument();
    }
    class ConcreteType implements GenericType<TypeArgument> {
        public void method(TypeArgument arg) {}
        public Class<TypeArgument> getTypeArgument() {
            return TypeArgument.class;
        }
    }
    static class GenericUsage {
        private GenericType<?> reference;
        public void method(Object arg) {
            // reference.method(arg); // error
            _helper(reference, arg);
        }
        private static <T> void _helper(GenericType<T> reference, Object arg) {
            reference.method(reference.getTypeArgument().cast(arg));
        }
    }

    /////////////
    // design generic method
    @SafeVarargs
    public static <E> void addAll(List<E> list, E... array) {
        for (E element : array) list.add(element);
    }
    public static <E> void addAll0(List<E> list, E[] array) {
        for (E element : array)
            list.add(element);
    }

    
    public static Pair<String, String>[] method(Pair<String, String>... lists) {
        Object[] objs = lists;
        objs[0] = new Pair<>("x", "y");
        objs[1] = new Pair<>(0L, 0L);
        return lists;
    }

    ////////////////
    //

    

    
    
    public static void main(String[] args) {

        System.out.println("anonymous inner class with generics: ");
        t();
        System.out.println("==================================");
        System.out.println("type erasure, runtime share the same bytecode: ");
        type_erasure();
        System.out.println("==================================");
        System.out.println("cast parameterized type: ");
        cast_to_parameterized_type();
        System.out.println("==================================");
        supertype_relation();
        System.out.println("==================================");        
        generic_workaround();
        System.out.println("==================================");
        raw_types();
        generic_wrapper();
        System.out.println("==================================");
        wildcard_test();
        System.out.println("==================================");
        new S("a"); new S(1);
        System.out.println("==================================");
        System.out.println(" XX ");
        Timo t = new Timo();
        System.out.println("==================================");
        new SomeClass<String>();
        System.out.println("==================================");
        List<? extends Runnable> l;
        System.out.println("==================================");
        //new Modern().someMethod();
        System.out.println("==================================");
        //new Modern0().someModernMethod();
        System.out.println("==================================");
        System.out.println("==== Generic Method  ====");
        
        genericMethod(new Object());
        genericMethod("abc");

        GenericClass<Integer> test = new GenericClass<Integer>();
        test.method(new ArrayList<Integer> ());
        test.method0(new ArrayList<>());
        // output : overloadedMethod(Collection<?>)        
        
        System.out.println("========= addAll ==============");
        addAll(new ArrayList<String>(), "Leonardo ", "Vasco");
        addAll(new ArrayList<Pair<String,String>>(),
               new Pair<String, String>("A", "B"),
               new Pair<String, String>("C", "D")
            );
        System.out.println("==================================");
        Pair<String,String>[] result
            = method(new Pair<String,String>("Vasco","da Gama"), // unchecked warning
                     new Pair<String,String>("Leonard","da Vinci"));
        for (Pair<String, String> p : result) {
            // String s = p.getFirst(); // ClassCastException
            Object s = p.getFirst();    // fine
        }
        System.out.println("==================================");
        
    }
    
}
