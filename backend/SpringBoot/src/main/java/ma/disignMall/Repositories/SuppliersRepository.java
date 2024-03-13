package ma.disignMall.Repositories;

import ma.disignMall.Models.Entities.Suppliers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuppliersRepository extends JpaRepository<Suppliers, Long> {
}