public class Stringbuffer {
    public static void main(String[] args) {
        StringBuffer a = new StringBuffer("My name is Rachit");
        System.out.println(a);
        // a.append("Hello");
        // a.append(" ");
        // a.append("My");
        // a.append(" ");
        // a.append("Name");
        a.delete(0, a.length());
        System.out.println(a);
    }
}
