package ma.disignMall.Models.DTOs;

import lombok.Value;
import ma.disignMall.Models.Entities.Services;

import java.io.Serializable;

/**
 * DTO for {@link Services}
 */
@Value
public class ServicesDto implements Serializable {
    Long Id;
    String description;
    Float price;
}