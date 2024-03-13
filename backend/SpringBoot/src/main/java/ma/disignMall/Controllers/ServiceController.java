package ma.disignMall.Controllers;

import ma.disignMall.Models.Entities.Services;
import ma.disignMall.Models.DTOs.ServicesDto;
import ma.disignMall.Services.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {
    @Autowired
    private ServiceService serviceService;

    @GetMapping
    public List<Services> getAllServices() {
        return serviceService.getAllServices();
    }

    @GetMapping("/{serviceId}")
    public Services getServiceById(@PathVariable Long serviceId) {
        return serviceService.getServiceById(serviceId).orElse(null);
    }

    @PostMapping
    public Services saveService(@RequestBody ServicesDto servicesDto) {
        return serviceService.saveService(servicesDto);
    }

    @DeleteMapping("/{serviceId}")
    public void deleteService(@PathVariable Long serviceId) {
        serviceService.deleteService(serviceId);
    }
}

