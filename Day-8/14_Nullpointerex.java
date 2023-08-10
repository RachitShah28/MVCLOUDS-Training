 class Nullpointerex {
    public static void main(String[] args) {
        // NullPointerException
        String b =null;

        try{
            if(b.charAt(0) == 'a'){
                System.out.println("Length is grater than 1");
            }
        }
        catch(NullPointerException e){
            System.out.println("Nullpointer exception");
        }
    }
}
