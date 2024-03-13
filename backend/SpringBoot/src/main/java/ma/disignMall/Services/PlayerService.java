package ma.disignMall.Services;

import ma.disignMall.Models.DTOs.PlayerDto;
import ma.disignMall.Models.Entities.Customer;
import ma.disignMall.Models.Entities.Player;
import ma.disignMall.Models.Entities.Teams;
import ma.disignMall.Models.Mappers.PlayerMapper;
import ma.disignMall.Repositories.CustomerRepository;
import ma.disignMall.Repositories.PlayerRepository;
import ma.disignMall.Repositories.TeamsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {

    private PlayerRepository playerRepository;
    private PlayerMapper playerMapper;
    private CustomerRepository customerRepository;
    private TeamsRepository teamsRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository, PlayerMapper playerMapper, CustomerRepository customerRepository, TeamsRepository teamsRepository){
        this.customerRepository = customerRepository;
        this.teamsRepository = teamsRepository;
        this.playerRepository = playerRepository;
        this.playerMapper = playerMapper;
    }

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public Optional<Player> getPlayerById(Long playerId) {
        return playerRepository.findById(playerId);
    }

    public Player savePlayer(PlayerDto playerDto) {
        Player player = playerMapper.toEntity(playerDto);
        Customer customer = customerRepository.findById(playerDto.getCustomerId()).orElse(null);
        Teams team = teamsRepository.findById(playerDto.getTeamId()).orElse(null);
        player.setCustomer(customer);
        player.setTeam(team);
        player.setNameCoordinates(playerDto.getNameCoordinates());
        player.setNumberCoordinates(playerDto.getNumberCoordinates());
        return playerRepository.save(player);
    }

    public void deletePlayer(Long playerId) {
        playerRepository.deleteById(playerId);
    }
}
