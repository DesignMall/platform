package ma.disignMall.Services;

import ma.disignMall.Models.Entities.Suppliers;
import ma.disignMall.Repositories.SuppliersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SuppliersService {
    @Autowired
    private SuppliersRepository suppliersRepository;

    public List<Suppliers> getAllSuppliers() {
        return suppliersRepository.findAll();
    }

    public Optional<Suppliers> getSupplierById(Long supplierId) {
        return suppliersRepository.findById(supplierId);
    }

    public Suppliers saveSupplier(Suppliers supplier) {
        return suppliersRepository.save(supplier);
    }

    public void deleteSupplier(Long supplierId) {
        suppliersRepository.deleteById(supplierId);
    }
}

