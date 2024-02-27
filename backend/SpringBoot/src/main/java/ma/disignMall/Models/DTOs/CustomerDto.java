package ma.disignMall.Models.DTOs;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link ma.disignMall.Models.Entities.Customer}
 */
@Value
public class CustomerDto implements Serializable {
    String customerId;
    String firstName;
    String lastName;
    String phoneNumber;
    String location;
    String email;
    String password;
}