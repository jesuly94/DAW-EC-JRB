public class ejer2{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
int input=1;
String inputtexto= "0";
int cont=0;

inputtexto = scanner.nextLine(); 
String[] numberstexto = inputtexto.split(" ");
cont=numberstexto.length;
int numbers [] = new int [cont];

for(int o=0;o<cont;o++){
    numbers [o] = Integer.parseInt(numberstexto[o]);
    System.out.println(numbers [o]);
}

for(int i=0;i<cont;i++){
    if((numbers[i])%2 ==0)System.out.println(numbers[i]+" es PAR" );
    else System.out.println(numbers[i]+" es IMPAR");
}

System.out.println("SE VERIFICO  : " +cont +"  NÚMEROS");
    }
}