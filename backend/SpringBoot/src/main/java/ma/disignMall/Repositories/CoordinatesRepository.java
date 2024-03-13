package ma.disignMall.Repositories;

import ma.disignMall.Models.Entities.Coordinates;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoordinatesRepository extends JpaRepository<Coordinates, Long> {
}