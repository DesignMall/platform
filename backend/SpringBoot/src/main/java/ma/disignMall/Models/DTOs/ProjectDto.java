package ma.disignMall.Models.DTOs;

import lombok.Data;
import lombok.Value;
import ma.disignMall.Models.Enums.Status;
import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;

/**
 * DTO for {@link ma.disignMall.Models.Entities.Project}
 */
@Value
@Data
public class ProjectDto implements Serializable {
    Long id;
    String name;
    String description;
    String date;
    Status status;
    Long CostumerId;
    MultipartFile file;
}