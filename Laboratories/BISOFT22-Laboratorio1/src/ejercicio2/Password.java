package ejercicio2;

import java.security.SecureRandom;

public class Password {
    private int length = 8;
    private String password;

    public Password() {
        generarPassword();
    }

    public Password(int length) {
        this.length = length;
        generarPassword();
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean esFuerte() {
        final int COUNT_LOWERCASE = this.password.split("(?=\\p{Ll})").length - 1;
        final int COUNT_UPPERCASE = this.password.split("(?=\\p{Lu})").length - 1;
        final int COUNT_DIGIT = this.password.split("(?=\\p{N})").length - 1;

        return COUNT_LOWERCASE > 1 && COUNT_UPPERCASE > 2 && COUNT_DIGIT > 5;
    }

    private void generarPassword() {
        final String CHAR_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
        final String CHAR_UPPERCASE = CHAR_LOWERCASE.toUpperCase();
        final String DIGIT = "0123456789";

        StringBuilder tmpPassword = new StringBuilder();
        SecureRandom secureRandom = new SecureRandom();

        for (int i = 0; i < this.length; i++) {
            int rand = secureRandom.nextInt(3);
            switch (rand) {
                case 0:
                    tmpPassword.append(CHAR_LOWERCASE.charAt(secureRandom.nextInt(CHAR_LOWERCASE.length())));
                    break;
                case 1:
                    tmpPassword.append(CHAR_UPPERCASE.charAt(secureRandom.nextInt(CHAR_UPPERCASE.length())));
                    break;
                case 2:
                    tmpPassword.append(DIGIT.charAt(secureRandom.nextInt(DIGIT.length())));
                    break;
                default:
                    throw new IllegalArgumentException("Invalid character selection index.");
            }
        }

        this.password = tmpPassword.toString();
    }
}
