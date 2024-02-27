package ma.disignMall.Models.Mappers;

import ma.disignMall.Models.DTOs.AdminDto;
import ma.disignMall.Models.Entities.Admin;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
@Mapper(componentModel = "spring")
public interface AdminMapper {

    AdminMapper INSTANCE = Mappers.getMapper(AdminMapper.class);

    AdminDto toDto(Admin Admin);

    Admin toEntity(AdminDto AdminDto);
}