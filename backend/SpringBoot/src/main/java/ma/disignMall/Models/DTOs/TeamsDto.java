package ma.disignMall.Models.DTOs;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link ma.disignMall.Models.Entities.Teams}
 */
@Value
public class TeamsDto implements Serializable {
    String teamId;
    String name;
    String category;
}