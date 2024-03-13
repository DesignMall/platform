package ma.disignMall.Services;

import ma.disignMall.Models.DTOs.ProviderDto;
import ma.disignMall.Models.Entities.Customer;
import ma.disignMall.Models.Entities.Provider;
import ma.disignMall.Models.Mappers.CustomerMapper;
import ma.disignMall.Models.Mappers.ProviderMapper;
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

    public Optional<Provider> getProviderById(Long providerId) {
        return providerRepository.findById(providerId);
    }

    public Provider saveProvider(ProviderDto providerDto) {
        Provider provider = ProviderMapper.INSTANCE.toEntity(providerDto);
        System.out.println("Saving provider: " + provider);
        return providerRepository.save(provider);
    }

    public void deleteProvider(Long providerId) {
        providerRepository.deleteById(providerId);
    }
}
