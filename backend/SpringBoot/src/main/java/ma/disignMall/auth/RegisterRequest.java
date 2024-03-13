package ma.disignMall.auth;

import ma.disignMall.Models.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@Builder
@NoArgsConstructor
public class RegisterRequest {
  public RegisterRequest(String name, String email, String password, Role role) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  private String name;
  private String email;
  private String password;
  private Role role;

}
