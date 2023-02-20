import java.sql.*;

public class SurveyForm {
    private String name;
    private String email;
    private String gender;
    private String country;
    private String message;

    public SurveyForm(String name, String email, String gender, String country, String message) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.country = country;
        this.message = message;
    }

    public boolean submit() {
        // Set up the database connection
        String url = "jdbc:mysql://localhost:3306/surveydb?useSSL=false";
        String user = "root";
        String password = "password";
        String query = "INSERT INTO survey (name, email, gender, country, message) VALUES (?, ?, ?, ?, ?)";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement stmt = conn.prepareStatement(query)) {
            stmt.setString(1, name);
            stmt.setString(2, email);
            stmt.setString(3, gender);
            stmt.setString(4, country);
            stmt.setString(5, message);
            int rowsInserted = stmt.executeUpdate();
            if (rowsInserted > 0) {
                System.out.println("Data added successfully!");
                return true;
            } else {
                return false;
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
    }
}
