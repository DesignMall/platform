package ma.disignMall.Models.Mappers;

import ma.disignMall.Models.DTOs.SuppliersDto;
import ma.disignMall.Models.Entities.Suppliers;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface SuppliersMapper {

    SuppliersMapper INSTANCE = Mappers.getMapper(SuppliersMapper.class);

    SuppliersDto toDto(Suppliers Suppliers);

    Suppliers toEntity(SuppliersDto SuppliersDto);
}