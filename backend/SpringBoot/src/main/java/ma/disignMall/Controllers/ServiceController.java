package ma.disignMall.Controllers;

import ma.disignMall.Models.Entities.Services;
import ma.disignMall.Services.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class ServiceController {
    @Autowired
    private ServiceService serviceService;

    @GetMapping
    public List<Services> getAllServices() {
        return serviceService.getAllServices();
    }

    @GetMapping("/{serviceId}")
    public Services getServiceById(@PathVariable String serviceId) {
        return serviceService.getServiceById(serviceId).orElse(null);
    }

    @PostMapping
    public Services saveService(@RequestBody Services service) {
        return serviceService.saveService(service);
    }

    @DeleteMapping("/{serviceId}")
    public void deleteService(@PathVariable String serviceId) {
        serviceService.deleteService(serviceId);
    }
}

