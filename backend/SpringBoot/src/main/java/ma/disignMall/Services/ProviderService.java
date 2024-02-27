package ma.disignMall.Services;

import ma.disignMall.Models.Entities.Provider;
import ma.disignMall.Repositories.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProviderService {
    @Autowired
    private ProviderRepository providerRepository;

    public List<Provider> getAllProviders() {
        return providerRepository.findAll();
    }

    public Optional<Provider> getProviderById(String providerId) {
        return providerRepository.findById(providerId);
    }

    public Provider saveProvider(Provider provider) {
        return providerRepository.save(provider);
    }

    public void deleteProvider(String providerId) {
        providerRepository.deleteById(providerId);
    }
}
