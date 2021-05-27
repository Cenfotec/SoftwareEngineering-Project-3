package ejercicio2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class GeneratePassword {
    static BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

    public static void main(String[] args) throws IOException {
        System.out.print("Length of password: ");
        int passwordLength = Integer.parseInt(bf.readLine());

        Password password = new Password(passwordLength);

        System.out.println(password.getPassword());
        System.out.println("Es fuerte: " + password.esFuerte());
    }
}
