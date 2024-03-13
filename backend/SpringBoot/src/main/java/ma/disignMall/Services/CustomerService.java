package ma.disignMall.Services;

import ma.disignMall.Models.DTOs.CustomerDto;
import ma.disignMall.Models.Entities.Customer;
import ma.disignMall.Models.Mappers.CustomerMapper;
import ma.disignMall.Repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerById(Long customerId) {
        return customerRepository.findById(customerId);
    }

    public Customer saveCustomer(CustomerDto customerDto) {
        Customer customer = CustomerMapper.INSTANCE.toEntity(customerDto);
        return customerRepository.save(customer);
    }

    public void deleteCustomer(Long customerId) {
        customerRepository.deleteById(customerId);
    }
}
