package ma.disignMall.Config;

import ma.disignMall.Models.Entities.Admin;;
import ma.disignMall.Models.Entities.Files;
import ma.disignMall.Models.Enums.State;
import ma.disignMall.Models.token.TokenRepository;
import ma.disignMall.Models.user.UserRepository;
import ma.disignMall.Repositories.AdminRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {

  private final TokenRepository tokenRepository;
  private final UserRepository userRepository;
  private final JwtService jwtService;
  private final AdminRepository adminRepository;

  @Override
  public void logout(
      HttpServletRequest request,
      HttpServletResponse response,
      Authentication authentication
  ) {
//    this.logingOut(request);
    final String authHeader = request.getHeader("Authorization");
    final String jwt;
    if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
      return;
    }
    jwt = authHeader.substring(7);
    var storedToken = tokenRepository.findByToken(jwt)
        .orElse(null);
    if (storedToken != null) {
      storedToken.setExpired(true);
      storedToken.setRevoked(true);
      tokenRepository.save(storedToken);
      SecurityContextHolder.clearContext();
    }
  }
//  public void logingOut(HttpServletRequest request) {
//    System.out.println("logout");
//    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
//    final String accessToken;
//    final String userEmail;
//
//    if (authHeader != null && authHeader.startsWith("Bearer ")) {
//      accessToken = authHeader.substring(7);
//      userEmail = jwtService.extractUsername(accessToken);
//
//      if (userEmail != null) {
//        var user = userRepository.findByEmail(userEmail).orElse(null);
//        switch (user.getRole()) {
//          case ADMIN:
//            Admin admin = adminRepository.findByEmail(userEmail);
//            admin.setState(State.OFFLINE);
//            adminRepository.save(admin);
//            break;
//          case COMPANY:
//            Company company = companyRepository.findCompanyWithoutImage(userEmail).orElse(null);
//            Long imageId = companyRepository.findCompanyImageId(company.getId());
//            Files image = new Files(imageId);
//            company.setImage(image);
//            company.setState(State.OFFLINE);
//            companyRepository.save(company);
//            break;
//          case APPLICANT:
//            Applicant applicant = applicantRepository.findApplicantWithoutCv(userEmail).orElse(null);
//            Long cvId = applicantRepository.findApplicantCvId(applicant.getId());
//            Files cv = new Files(cvId);
//            applicant.setCv(cv);
//            applicant.setState(State.OFFLINE);
//            applicantRepository.save(applicant);
//            break;
//        }
//      }
//    }
//  }
}
