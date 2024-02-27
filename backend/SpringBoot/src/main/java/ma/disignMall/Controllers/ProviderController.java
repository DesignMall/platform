package ma.disignMall.Controllers;

import ma.disignMall.Models.Entities.Provider;
import ma.disignMall.Services.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/providers")
public class ProviderController {
    @Autowired
    private ProviderService providerService;

    @GetMapping
    public List<Provider> getAllProviders() {
        return providerService.getAllProviders();
    }

    @GetMapping("/{providerId}")
    public Provider getProviderById(@PathVariable String providerId) {
        return providerService.getProviderById(providerId).orElse(null);
    }

    @PostMapping
    public Provider saveProvider(@RequestBody Provider provider) {
        return providerService.saveProvider(provider);
    }

    @DeleteMapping("/{providerId}")
    public void deleteProvider(@PathVariable String providerId) {
        providerService.deleteProvider(providerId);
    }
}
