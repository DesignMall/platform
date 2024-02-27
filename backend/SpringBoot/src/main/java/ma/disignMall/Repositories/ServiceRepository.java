package ma.disignMall.Repositories;

import ma.disignMall.Models.Entities.Services;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Services, String> {
}