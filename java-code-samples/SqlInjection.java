import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class SqlInjection {
    public static void main(String[] args) throws SQLException {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter username: ");
        String username = scanner.nextLine();
        System.out.print("Enter password: ");
        String password = scanner.nextLine();
        String sql = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "root", "password");
        PreparedStatement statement = connection.prepareStatement(sql);
        ResultSet resultSet = statement.executeQuery();
        if (resultSet.next()) {
            System.out.println("Login successful.");
        } else {
            System.out.println("Invalid credentials.");
        }
        resultSet.close();
        statement.close();
        connection.close();
        scanner.close();
    }
}
