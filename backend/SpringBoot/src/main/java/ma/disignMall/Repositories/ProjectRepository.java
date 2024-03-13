package ma.disignMall.Repositories;

import ma.disignMall.Models.Entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}