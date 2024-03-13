package ma.disignMall.Controllers;

import ma.disignMall.Models.DTOs.PlayerDto;
import ma.disignMall.Models.Entities.Player;
import ma.disignMall.Services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/playerChoice")
public class PlayerController {
    @Autowired
    private PlayerService playerService;

    @GetMapping
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @GetMapping("/{playerId}")
    public Player getPlayerById(@PathVariable Long playerId) {
        return playerService.getPlayerById(playerId).orElse(null);
    }

    @PostMapping
    public Player savePlayer(@RequestBody PlayerDto playerDto) {
        return playerService.savePlayer(playerDto);
    }

    @DeleteMapping("/{playerId}")
    public void deletePlayer(@PathVariable Long playerId) {
        playerService.deletePlayer(playerId);
    }
}
