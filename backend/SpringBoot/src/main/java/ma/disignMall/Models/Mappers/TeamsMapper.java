package ma.disignMall.Models.Mappers;

import ma.disignMall.Models.DTOs.TeamsDto;
import ma.disignMall.Models.Entities.Teams;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface TeamsMapper {

    TeamsMapper INSTANCE = Mappers.getMapper(TeamsMapper.class);

    TeamsDto toDto(Teams Team);

    Teams toEntity(TeamsDto TeamDto);
}