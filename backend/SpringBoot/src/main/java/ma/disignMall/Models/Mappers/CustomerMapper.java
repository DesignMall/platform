package ma.disignMall.Models.Mappers;

import ma.disignMall.Models.DTOs.CustomerDto;
import ma.disignMall.Models.Entities.Customer;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CustomerMapper {

    CustomerMapper INSTANCE = Mappers.getMapper(CustomerMapper.class);

    CustomerDto toDto(Customer customer);

    Customer toEntity(CustomerDto customerDto);
}
