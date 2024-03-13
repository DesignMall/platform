package ma.disignMall.Models.Mappers;

import ma.disignMall.Models.DTOs.ProviderDto;
import ma.disignMall.Models.Entities.Provider;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProviderMapper {

    ProviderMapper INSTANCE = Mappers.getMapper(ProviderMapper.class);

    ProviderDto toDto(Provider provider);

    Provider toEntity(ProviderDto providerDto);
}