package ma.disignMall.Controllers;

import ma.disignMall.Models.DTOs.ProviderDto;
import ma.disignMall.Models.Entities.Admin;
import ma.disignMall.Models.Entities.Provider;
import ma.disignMall.Services.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/providers")
public class ProviderController {
    @Autowired
    private ProviderService providerService;

    @GetMapping
    public ResponseEntity<List<Provider>> getAllProviders(){
        List<Provider> providers = providerService.getAllProviders();
        return ResponseEntity.ok(providers);
    }

    @GetMapping("/{providerId}")
    public Provider getProviderById(@PathVariable Long providerId) {
        return providerService.getProviderById(providerId).orElse(null);
    }

    @PostMapping
    public Provider saveProvider(@RequestBody ProviderDto providerDto) {
        System.out.println(providerDto);
        return providerService.saveProvider(providerDto);
    }

    @DeleteMapping("/{providerId}")
    public void deleteProvider(@PathVariable Long providerId) {
        providerService.deleteProvider(providerId);
    }
}
