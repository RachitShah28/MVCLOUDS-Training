  class A{

    void print1(){
        System.out.println("Inside class A");
    }
}
  class B extends A{

    void print2(){
        System.out.println("Inside class B");
    }
}
  class C extends B{

    void print3(){
        System.out.println("Inside class C");
    }
}

public class multilevel extends C{
    public static void main(String[] args) {
        C obj = new C();
        obj.print1();
        obj.print2();
        obj.print3();
    }
}