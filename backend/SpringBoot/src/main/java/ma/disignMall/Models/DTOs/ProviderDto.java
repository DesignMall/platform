package ma.disignMall.Models.DTOs;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link ma.disignMall.Models.Entities.Provider}
 */
@Value
public class ProviderDto implements Serializable {
    String providerId;
    String firstName;
    String lastName;
    String email;
    String password;
    String phoneNumber;
    String location;
    String field;
    Float rate;
    Integer experience;
    Boolean available;
}