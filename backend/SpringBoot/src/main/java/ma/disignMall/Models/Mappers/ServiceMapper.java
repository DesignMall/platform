package ma.disignMall.Models.Mappers;

import ma.disignMall.Models.Entities.Services;
import ma.disignMall.Models.DTOs.ServicesDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ServiceMapper {

    ServiceMapper INSTANCE = Mappers.getMapper(ServiceMapper.class);

    ServicesDto toDto(Services Service);

    Services toEntity(ServicesDto ServiceDto);
}