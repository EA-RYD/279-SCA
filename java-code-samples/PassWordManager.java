public class PassWordManager {
    private String password;

    public PassWordManager(String password) {
        this.password = password;
    }

    public boolean validatePassword(String input) {
        return this.password.equals(input);
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        if (password.length() < 8) {
            throw new IllegalArgumentException("Password must be at least 8 characters");
        }
        this.password = password;
    }
}

