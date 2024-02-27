package ma.disignMall.Services;

import ma.disignMall.Repositories.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ma.disignMall.Models.Entities.Services;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceService {
    @Autowired
    private ServiceRepository serviceRepository;

    public List<Services> getAllServices() {
        return serviceRepository.findAll();
    }

    public Optional<Services> getServiceById(String serviceId) {
        return serviceRepository.findById(serviceId);
    }

    public Services saveService(Services service) {
        return serviceRepository.save(service);
    }

    public void deleteService(String serviceId) {
        serviceRepository.deleteById(serviceId);
    }
}

