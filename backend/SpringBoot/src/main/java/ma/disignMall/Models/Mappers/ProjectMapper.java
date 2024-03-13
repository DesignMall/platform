package ma.disignMall.Models.Mappers;


import ma.disignMall.Models.DTOs.ProjectDto;
import ma.disignMall.Models.Entities.Project;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProjectMapper {

    ProjectMapper INSTANCE = Mappers.getMapper(ProjectMapper.class);

    Project toEntity(ProjectDto projectDto);
}
