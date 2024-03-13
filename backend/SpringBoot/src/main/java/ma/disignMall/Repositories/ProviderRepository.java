package ma.disignMall.Repositories;

import ma.disignMall.Models.Entities.Provider;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderRepository extends JpaRepository<Provider, Long> {
}