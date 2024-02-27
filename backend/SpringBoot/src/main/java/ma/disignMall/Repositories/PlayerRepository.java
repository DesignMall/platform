package ma.disignMall.Repositories;

import ma.disignMall.Models.Entities.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, String> {
}