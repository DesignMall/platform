package ma.disignMall.Models.Mappers;

import ma.disignMall.Models.DTOs.PlayerDto;
import ma.disignMall.Models.Entities.Player;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PlayerMapper {

    PlayerMapper INSTANCE = Mappers.getMapper(PlayerMapper.class);

    PlayerDto toDto(Player Player);

    Player toEntity(PlayerDto PlayerDto);
}