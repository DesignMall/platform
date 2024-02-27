package ma.disignMall.Repositories;

import ma.disignMall.Models.Entities.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanRepository extends JpaRepository<Plan, Long> {
}