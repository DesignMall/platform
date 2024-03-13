package ma.disignMall.Controllers;

import ma.disignMall.Models.Entities.Suppliers;
import ma.disignMall.Services.SuppliersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/suppliers")
public class SuppliersController {
    @Autowired
    private SuppliersService suppliersService;

    @GetMapping
    public List<Suppliers> getAllSuppliers() {
        return suppliersService.getAllSuppliers();
    }

    @GetMapping("/{supplierId}")
    public Suppliers getSupplierById(@PathVariable Long supplierId) {
        return suppliersService.getSupplierById(supplierId).orElse(null);
    }

    @PostMapping
    public Suppliers saveSupplier(@RequestBody Suppliers supplier) {
        return suppliersService.saveSupplier(supplier);
    }

    @DeleteMapping("/{supplierId}")
    public void deleteSupplier(@PathVariable Long supplierId) {
        suppliersService.deleteSupplier(supplierId);
    }
}
