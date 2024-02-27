package ma.disignMall.Models.DTOs;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link ma.disignMall.Models.Entities.Suppliers}
 */
@Value
public class SuppliersDto implements Serializable {
    String supplierId;
    String name;
    String field;
    String location;
    String phoneNumber;
}