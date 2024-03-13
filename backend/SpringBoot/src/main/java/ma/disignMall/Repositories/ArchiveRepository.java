package ma.disignMall.Repositories;

import ma.disignMall.Models.Entities.Archive;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArchiveRepository extends JpaRepository<Archive, Long> {
}