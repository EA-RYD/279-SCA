import java.net.HttpURLConnection;
import java.net.URL;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;


// Uses HTTP over HTTPs which is more secure over attacks
public class UnsecureProtocol {
    public static void main(String[] args) throws IOException {
        try {
            URL ex_url = new URL("http://www.example.com/");
            HttpURLConnection comm = (HttpURLConnection) ex_url.openConnection();
    
            InputStreamReader ir = new InputStreamReader(comm.getInputStream());
            BufferedReader in = new BufferedReader(ir);

            String inputLine;
            StringBuilder response = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }

            in.close();
            System.out.println(response.toString());
            System.out.println("Response from site: " + comm.getResponseCode());
    
            comm.disconnect();

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
    
}