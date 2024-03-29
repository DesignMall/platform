package ma.disignMall.Controllers;

import ma.disignMall.Models.DTOs.CustomerDto;
import ma.disignMall.Models.Entities.Customer;
import ma.disignMall.Services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/{customerId}")
    public Customer getCustomerById(@PathVariable Long customerId) {
        return customerService.getCustomerById(customerId).orElse(null);
    }

    @PostMapping
    public Customer saveCustomer(@RequestBody CustomerDto customer) {
        return customerService.saveCustomer(customer);
    }

    @DeleteMapping("/{customerId}")
    public void deleteCustomer(@PathVariable Long customerId) {
        customerService.deleteCustomer(customerId);
    }
}
